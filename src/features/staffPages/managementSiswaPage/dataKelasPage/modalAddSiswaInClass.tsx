import React, { useState } from "react";
import DataTable from "react-data-table-component";
import {
  PayloadInsertStundets,
  StudentDetail,
} from "../../../../interface/student.interface";
import { Class } from "../../../../interface/studentClass.interface";
import ClassStudentService from "../../../../services/classStudentService";
import { showConfirmationDialog, Toast } from "../../../../utils/myFunctions";

interface ModalAddStudentInClassProps {
  onRefreshData: () => void;
  dataAllStudents: StudentDetail[];
  dataStudentsInClass: StudentDetail[];
  dataClass: Class;
  keySearch: string;
}

interface selectedData {
  allSelected: boolean;
  selectedCount: number;
  selectedRows: StudentDetail[];
}

export const ModalAddStudentInClass: React.FC<ModalAddStudentInClassProps> = ({
  onRefreshData,
  dataAllStudents,
  dataStudentsInClass,
  dataClass,
}) => {
  const classService = ClassStudentService();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedData, setSelectedData] = useState<StudentDetail[]>([]);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  // Filter data based on search term
  const filterDataStudent = dataAllStudents.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columnsStudent = [
    {
      name: "No",
      cell: (_row: StudentDetail, index: number) => index + 1,
      width: "50px",
    },
    {
      name: "Nama",
      selector: (row: StudentDetail) => row.name,
      sortable: true,
    },
    {
      name: "NIS",
      selector: (row: StudentDetail) => row.nis,
      sortable: true,
      width: "100px",
    },
    {
      name: "NISN",
      selector: (row: StudentDetail) => row.nisn,
      sortable: true,
      width: "100px",
    },
    {
      name: "Jurusan",
      selector: (row: StudentDetail) => row.Major.majorCode || "",
      sortable: true,
      width: "100px",
    },
    {
      name: "No.Telp",
      selector: (row: StudentDetail) => row.phone,
      sortable: true,
      width: "120px",
    },
  ];

  const handleChange = (selectedRows: selectedData) => {
    setSelectedData(selectedRows.selectedRows);
  };

  const handleSubmit = async () => {
    const collectionNis: string[] = [];
    selectedData.forEach((data) => {
      collectionNis.push(data.nis);
    });

    console.log(collectionNis);

    if (collectionNis.length < 1) {
      return Toast.fire({
        icon: "error",
        title: `Silahkan pilih siswa minimal 1`,
        timer: 3000,
      });
    }

    const payload: PayloadInsertStundets = {
      id: dataClass.id,
      collectionNis: collectionNis,
    };
    try {
      setLoadingSubmit(true);
      const result = await showConfirmationDialog({
        title: "Apakah data siswa yang dipilih sudah sesuai?",
        icon: "warning",
        confirmButtonText: "Ya, Sesuai!",
        cancelButtonText: "Cek Lagi",
      });

      if (result.isConfirmed) {
        const response = await classService.insertStudentInClass(payload);
        if (response.status === 201) {
          const modalElement = document.getElementById(
            "modalAddStudentInClass"
          ) as HTMLDivElement | null;
          if (modalElement) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const modalInstance = (window as any).bootstrap.Modal.getInstance(
              modalElement
            );
            if (modalInstance) modalInstance.hide();
          }
          onRefreshData();
          Toast.fire({
            icon: "success",
            title: `Siswa berhasil ditambah kedalam kelas`,
            timer: 4500,
          });
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingSubmit(false);
    }
  };

  return (
    <div
      className="modal fade modal-xl p-0"
      id="modalAddStudentInClass"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content position-relative">
          {loadingSubmit && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <div className="row mx-0 pb-4">
            <div className="col p-2 text-start py-3 px-3">
              <div className="fw-bold position-relative pb-2 fs-5">
                Tambah Siswa Ke Dalam Kelas
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50px",
                    height: "3px",
                    backgroundColor: "var(--blue-color)",
                  }}
                />
              </div>
            </div>
            <div className="col-auto p-2 text-start py-3 px-3">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>
          <div className="modal-body pb-4">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <div className="">
                      Total :{" "}
                      <span className="fw-bold">{dataAllStudents.length}</span>
                    </div>
                    <div className="">
                      Diplih :{" "}
                      <span className="fw-bold">{selectedData.length}</span>
                    </div>
                  </div>
                  <div className="col-6 col-lg-5">
                    <input
                      type="text"
                      className="form-control border-dark"
                      placeholder="Search.."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{ fontSize: "1.1em" }}
                    />
                  </div>
                </div>
                <DataTable
                  columns={columnsStudent}
                  data={filterDataStudent}
                  pagination
                  selectableRows
                  onSelectedRowsChange={handleChange}
                  highlightOnHover
                  customStyles={{
                    rows: {
                      style: {
                        "&:hover": {
                          backgroundColor: "#f5f5f5",
                          color: "#007bff",
                        },
                      },
                    },
                  }}
                />
              </div>
              <div
                className="col-12 col-lg-4"
                style={{ borderLeft: "0.5px solid grey" }}
              >
                <div className="mb-3 fw-bold">Siswa Dipilih</div>
                <div className="row">
                  <div className="col-12">
                    <div className="row mb-3">
                      <div className="col-4 fw-medium">TA</div>
                      <div className="col-auto">:</div>
                      <div className="col-7 fw-medium">
                        {dataClass?.academicYear}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-4 fw-medium">Kelas</div>
                      <div className="col-auto">:</div>
                      <div className="col-7 fw-medium">{dataClass?.name}</div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-4 fw-medium">Kapasitas </div>
                      <div className="col-auto">:</div>
                      <div className="col-7 fw-medium">
                        {dataClass?.capacity}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-4 fw-medium">Saat Ini </div>
                      <div className="col-auto">:</div>
                      <div className="col-7 fw-medium">
                        {dataStudentsInClass?.length} Siswa
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-4 fw-medium">Wali Kelas </div>
                      <div className="col-auto">:</div>
                      <div className="col-7 fw-medium">
                        {dataClass?.homeRoomTeacher.name}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-12">
                        <button
                          className="btn btn-primary border-0 bg-blue w-100"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
