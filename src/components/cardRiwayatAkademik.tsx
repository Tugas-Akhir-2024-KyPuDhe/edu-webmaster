import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { StudentHistory } from "../interface/studentHistory.interface";

interface GradeProps {
  data: StudentHistory[];
}

export const CardRiwayatAkademik: React.FC<GradeProps> = ({ data }) => {
  const [selectedClass, setSelectedClass] = useState<StudentHistory>();

  const handleSelected = (dataClass: StudentHistory) => {
    setSelectedClass(dataClass);
  };

  return (
    <>
      <div className="fw-bold fs-5 mb-4 text-dark-soft position-relative pb-2">
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "50px",
            height: "5px",
            backgroundColor: "var(--blue-color)",
          }}
        />
        Riwayat Akademik
      </div>
      <div className="">
        <div className="accordion" id="accordionHistoryAkademik">
          <ul className="list-group">
            {data.map((dataClass, index) => (
              <>
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-start py-3 mb-3 bg-light border-0"
                >
                  <div className="ms-2 me-auto m-auto">
                    <div className="fw-medium">
                      {dataClass.currentClass.name}
                    </div>
                  </div>
                  <span className="">
                    <button
                      className="btn border-blue text-blue btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#modalDetailGrades"
                      onClick={() => handleSelected(dataClass)}
                    >
                      <FaEye className="me-2 fs-5" /> Detail
                    </button>

                    <ModalDetail dataClass={selectedClass! && selectedClass!} />
                  </span>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

interface ModalProps {
  dataClass: StudentHistory;
}

export const ModalDetail: React.FC<ModalProps> = ({ dataClass }) => {
  const [selectedDescription, setSelectedDescription] = useState("");
  return (
    <>
      <div
        className="modal fade modal-xl p-0"
        id="modalDetailGrades"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content position-relative">
            <div className="row mx-0 pb-4">
              <div className="col p-2 text-start py-3 px-3">
                <div className="fw-bold position-relative pb-2 fs-5">
                  Detail Nilai Siswa
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
            <div className="modal-body pb-4 px-4">
              <div className="row g-3">
                <div className="col-12">
                  <div className="row mb-3">
                    <div className="col-3 col-md-2 fw-medium">Tahun Ajaran</div>
                    <div className="col-auto">:</div>
                    <div className="col-9 col-md-9 fw-medium">
                      {dataClass && dataClass.currentClass.academicYear}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-3 col-md-2 fw-medium">Kelas</div>
                    <div className="col-auto">:</div>
                    <div className="col-9 col-md-9 fw-medium">
                      {dataClass && dataClass.currentClass.name}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-3 col-md-2 fw-medium">
                      Guru Wali Kelas
                    </div>
                    <div className="col-auto">:</div>
                    <div className="col-9 col-md-9 fw-medium">
                      {dataClass && dataClass.currentClass.homeRoomTeacher.name}
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="table-responsive">
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th
                            className="py-3 bg-blue text-light text-center"
                            scope="col"
                            style={{ width: "50px", fontSize: "0.9rem" }}
                          >
                            No
                          </th>
                          <th
                            className="border-start py-3 bg-blue text-light"
                            scope="col"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Mata Pelajaran
                          </th>
                          <th
                            className="border-start py-3 bg-blue text-light"
                            scope="col"
                            style={{ fontSize: "0.9rem" }}
                          >
                            Guru Pengajar
                          </th>
                          <th
                            className="border-start text-center py-3 bg-blue text-light"
                            scope="col"
                            style={{ width: "70px", fontSize: "0.9rem" }}
                          >
                            Tugas
                          </th>
                          <th
                            className="border-start text-center py-3 bg-blue text-light text-center"
                            scope="col"
                            style={{ width: "70px", fontSize: "0.9rem" }}
                          >
                            UH
                          </th>
                          <th
                            className="border-start text-center py-3 bg-blue text-light text-center"
                            scope="col"
                            style={{ width: "70px", fontSize: "0.9rem" }}
                          >
                            PTS
                          </th>
                          <th
                            className="border-start text-center py-3 bg-blue text-light text-center"
                            scope="col"
                            style={{ width: "70px", fontSize: "0.9rem" }}
                          >
                            PAS
                          </th>
                          <th
                            className="border-start text-center py-3 bg-blue text-light text-center"
                            scope="col"
                            style={{ width: "70px", fontSize: "0.9rem" }}
                          >
                            Portofolio
                          </th>
                          <th
                            className="border-start text-center py-3 bg-blue text-light text-center"
                            scope="col"
                            style={{ width: "70px", fontSize: "0.9rem" }}
                          >
                            Proyek
                          </th>
                          <th
                            className="border-start py-3 bg-blue text-light text-center"
                            scope="col"
                            style={{ fontSize: "0.9rem" }}
                          >
                            KET
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(dataClass &&
                          dataClass.currentClass.CourseInClass?.map(
                            (mapel, index) => (
                              <tr key={index}>
                                <td className="py-3 text-center" scope="row">
                                  {index + 1}
                                </td>
                                <td className="py-3 text-start">
                                  {mapel.courseDetail.name}
                                </td>
                                <td className="py-3 text-start">
                                  {mapel.teacher.name}
                                </td>
                                <td className="py-3 text-center">
                                  {mapel.courseDetail.StudentsGrades![0]
                                    ? mapel.courseDetail.StudentsGrades![0]
                                        .task || "-"
                                    : "-"}
                                </td>
                                <td className="py-3 text-center">
                                  {mapel.courseDetail.StudentsGrades![0]
                                    ? mapel.courseDetail.StudentsGrades![0]
                                        .UH || "-"
                                    : "-"}
                                </td>
                                <td className="py-3 text-center">
                                  {mapel.courseDetail.StudentsGrades![0]
                                    ? mapel.courseDetail.StudentsGrades![0]
                                        .PTS || "-"
                                    : "-"}
                                </td>
                                <td className="py-3 text-center">
                                  {mapel.courseDetail.StudentsGrades![0]
                                    ? mapel.courseDetail.StudentsGrades![0]
                                        .PAS || "-"
                                    : "-"}
                                </td>
                                <td className="py-3 text-center">
                                  {mapel.courseDetail.StudentsGrades![0]
                                    ? mapel.courseDetail.StudentsGrades![0]
                                        .portofolio || "-"
                                    : "-"}
                                </td>
                                <td className="py-3 text-center">
                                  {mapel.courseDetail.StudentsGrades![0]
                                    ? mapel.courseDetail.StudentsGrades![0]
                                        .proyek || "-"
                                    : "-"}
                                </td>
                                <td className="py-3 text-center">
                                  <button
                                    className="btn btn-link"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modalDeskripsi"
                                    onClick={() =>
                                      setSelectedDescription(
                                        mapel.courseDetail.StudentsGrades![0]
                                          ? mapel.courseDetail
                                              .StudentsGrades![0].description ||
                                              "-"
                                          : "-"
                                      )
                                    }
                                    style={{ fontSize: "0.9rem" }}
                                  >
                                    Lihat
                                  </button>
                                </td>
                              </tr>
                            )
                          )) || (
                          <tr>
                            <td colSpan={10} className="py-3 text-center">
                              Tidak ada data mata pelajaran untuk kelas ini.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="modalDeskripsi"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Keterangan</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{selectedDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
