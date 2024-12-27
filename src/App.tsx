import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  AbsensiPage,
  ArticlePage,
  BannerPage,
  DetailArticlePage,
  FacilityPage,
  FormBannerPage,
  FormFacilityPage,
  HomePage,
  JurusanPage,
  KelasPage,
  LoginPage,
  MapelPage,
  NilaiPage,
  SchoolPage,
  FormJurusanPage,
  EkskulPage,
  FormEkskulPage,
  DaftarSiswaPage,
  FormDaftarSiswaPage,
  DaftarKelasPage,
  FormDaftarKelasPage,
  NilaiSiswaPage,
  FormNilaiSiswaPage,
  FormArticlePage,
  ProfilePage,
  AbsensiSiswaPage,
  DetailAbsensiSiswaPage,
  DataSiswaMangementSiswaPage,
  FormSiswaMangementSiswaPage,
  DetailSiswaMangementSiswa,
  GaleriPage,
  FormGaleriPage,
  NotFoundPage,
  UpdateGaleriColletion,
  DataKelasMangementSiswaPage,
  FormDataKelasMangementSiswaPage,
  DetailKelasMangementSiswaPage,
  DataMapelMangementSiswaPage,
  FormMapelMangementSiswaPage,
  DataStaffMangementStaffPage,
  FormStaffMangementStaffPage,
  DaftarKelasNilaiSiswaPage,
  DetailKelasPage,
  DetailKelasSiswaPage,
  BeritaPage,
  DetailStaffMangementSiswa,
} from "./pages";
import { SideBar } from "./components/sidebar";
import PrivateRoute from "./components/privateRoute";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const location = useLocation();
  const excludePathsWithoutSidebar = [/^\/login$/i];
  const isSidebarExcluded = excludePathsWithoutSidebar.some((pattern) =>
    pattern.test(location.pathname)
  );

  return (
    <>
      {isSidebarExcluded ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      ) : (
        <SideBar>
          <Routes>
            {/* #region | Global */}
            <Route path="*" element={<NotFoundPage />} />
            <Route
              path="/"
              element={
                <PrivateRoute
                  Component={HomePage}
                  Role={["STAFF", "TEACHER", "STUDENT"]}
                />
              }
            />
            <Route
              path="/profil"
              element={
                <PrivateRoute
                  Component={ProfilePage}
                  Role={["STAFF", "TEACHER", "STUDENT"]}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute
                  Component={HomePage}
                  Role={["STAFF", "TEACHER", "STUDENT"]}
                />
              }
            />
            <Route
              path="/berita"
              element={
                <PrivateRoute
                  Component={ArticlePage}
                  Role={["STAFF", "TEACHER", "STUDENT"]}
                />
              }
            />
            <Route
              path="/berita/:id"
              element={
                <PrivateRoute
                  Component={DetailArticlePage}
                  Role={["STAFF", "TEACHER", "STUDENT"]}
                />
              }
            />
            {/* #endregion */}

            {/* #region | Staff */}
            <Route
              path="/content-web/berita"
              element={<PrivateRoute Component={BeritaPage} Role={["STAFF"]} />}
            />
            <Route
              path="/content-web/berita/tambah"
              element={
                <PrivateRoute Component={FormArticlePage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/berita/update/:id"
              element={
                <PrivateRoute Component={FormArticlePage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/banner"
              element={<PrivateRoute Component={BannerPage} Role={["STAFF"]} />}
            />
            <Route
              path="/content-web/banner/tambah"
              element={
                <PrivateRoute Component={FormBannerPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/banner/update/:id"
              element={
                <PrivateRoute Component={FormBannerPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/sekolah"
              element={<PrivateRoute Component={SchoolPage} Role={["STAFF"]} />}
            />
            <Route
              path="/content-web/fasilitas"
              element={
                <PrivateRoute Component={FacilityPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/fasilitas/tambah"
              element={
                <PrivateRoute Component={FormFacilityPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/fasilitas/update/:id"
              element={
                <PrivateRoute Component={FormFacilityPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/jurusan"
              element={
                <PrivateRoute Component={JurusanPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/jurusan/tambah"
              element={
                <PrivateRoute Component={FormJurusanPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/jurusan/update/:id"
              element={
                <PrivateRoute Component={FormJurusanPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/ekstra-kurikuler"
              element={<PrivateRoute Component={EkskulPage} Role={["STAFF"]} />}
            />
            <Route
              path="/content-web/ekstra-kurikuler/tambah"
              element={
                <PrivateRoute Component={FormEkskulPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/ekstra-kurikuler/update/:id"
              element={
                <PrivateRoute Component={FormEkskulPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/galeri"
              element={<PrivateRoute Component={GaleriPage} Role={["STAFF"]} />}
            />
            <Route
              path="/content-web/galeri/tambah"
              element={
                <PrivateRoute Component={FormGaleriPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/galeri/update/:id"
              element={
                <PrivateRoute Component={FormGaleriPage} Role={["STAFF"]} />
              }
            />
            <Route
              path="/content-web/galeri/koleksi/:id"
              element={
                <PrivateRoute
                  Component={UpdateGaleriColletion}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/daftar-siswa"
              element={
                <PrivateRoute
                  Component={DataSiswaMangementSiswaPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/daftar-siswa/tambah"
              element={
                <PrivateRoute
                  Component={FormSiswaMangementSiswaPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/daftar-siswa/update/:id"
              element={
                <PrivateRoute
                  Component={FormSiswaMangementSiswaPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/daftar-siswa/detail/:id"
              element={
                <PrivateRoute
                  Component={DetailSiswaMangementSiswa}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/data-kelas"
              element={
                <PrivateRoute
                  Component={DataKelasMangementSiswaPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/data-kelas/tambah"
              element={
                <PrivateRoute
                  Component={FormDataKelasMangementSiswaPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/data-kelas/update/:id"
              element={
                <PrivateRoute
                  Component={FormDataKelasMangementSiswaPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/data-kelas/detail/:id"
              element={
                <PrivateRoute
                  Component={DetailKelasMangementSiswaPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/data-mapel"
              element={
                <PrivateRoute
                  Component={DataMapelMangementSiswaPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/data-mapel/tambah"
              element={
                <PrivateRoute
                  Component={FormMapelMangementSiswaPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-siswa/data-mapel/update/:id"
              element={
                <PrivateRoute
                  Component={FormMapelMangementSiswaPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-staff/data-staff"
              element={
                <PrivateRoute
                  Component={DataStaffMangementStaffPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-staff/data-staff/tambah"
              element={
                <PrivateRoute
                  Component={FormStaffMangementStaffPage}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-staff/data-staff/detail/:id"
              element={
                <PrivateRoute
                  Component={DetailStaffMangementSiswa}
                  Role={["STAFF"]}
                />
              }
            />
            <Route
              path="/manajemen-staff/data-staff/update/:id"
              element={
                <PrivateRoute
                  Component={FormStaffMangementStaffPage}
                  Role={["STAFF"]}
                />
              }
            />
            {/* === #endregion */}

            {/* #region | Teacher */}
            <Route
              path="/pengelolaan-siswa/daftar-siswa"
              element={
                <PrivateRoute Component={DaftarSiswaPage} Role={["TEACHER"]} />
              }
            />
            <Route
              path="/pengelolaan-siswa/daftar-siswa/tambah"
              element={
                <PrivateRoute
                  Component={FormDaftarSiswaPage}
                  Role={["TEACHER"]}
                />
              }
            />
            <Route
              path="/pengelolaan-siswa/daftar-siswa/update/:id"
              element={
                <PrivateRoute
                  Component={FormDaftarSiswaPage}
                  Role={["TEACHER"]}
                />
              }
            />
            <Route
              path="/guru/jadwal-mengajar"
              element={
                <PrivateRoute Component={DaftarKelasPage} Role={["TEACHER"]} />
              }
            />
            <Route
              path="/guru/jadwal-mengajar/tambah"
              element={
                <PrivateRoute
                  Component={FormDaftarKelasPage}
                  Role={["TEACHER"]}
                />
              }
            />
            <Route
              path="/guru/jadwal-mengajar/update/:id"
              element={
                <PrivateRoute
                  Component={FormDaftarKelasPage}
                  Role={["TEACHER"]}
                />
              }
            />
            <Route
              path="/guru/jadwal-mengajar/nilai/:id"
              element={
                <PrivateRoute
                  Component={DaftarKelasNilaiSiswaPage}
                  Role={["TEACHER"]}
                />
              }
            />
            <Route
              path="/guru/jadwal-mengajar/detail/:id"
              element={
                <PrivateRoute Component={DetailKelasPage} Role={["TEACHER"]} />
              }
            />
            <Route
              path="/pengelolaan-siswa/nilai-siswa"
              element={
                <PrivateRoute Component={NilaiSiswaPage} Role={["TEACHER"]} />
              }
            />
            <Route
              path="/pengelolaan-siswa/nilai-siswa/tambah"
              element={
                <PrivateRoute
                  Component={FormNilaiSiswaPage}
                  Role={["TEACHER"]}
                />
              }
            />
            <Route
              path="/pengelolaan-siswa/nilai-siswa/update/:id"
              element={
                <PrivateRoute
                  Component={FormNilaiSiswaPage}
                  Role={["TEACHER"]}
                />
              }
            />
            <Route
              path="/pengelolaan-siswa/absensi-siswa"
              element={
                <PrivateRoute Component={AbsensiSiswaPage} Role={["TEACHER"]} />
              }
            />
            <Route
              path="/pengelolaan-siswa/absensi-siswa/:id"
              element={
                <PrivateRoute
                  Component={DetailAbsensiSiswaPage}
                  Role={["TEACHER"]}
                />
              }
            />

            {/* #endregion */}

            {/* #region | Student  */}
            <Route
              path="/nilai"
              element={
                <PrivateRoute Component={NilaiPage} Role={["STUDENT"]} />
              }
            />
            <Route
              path="/kelas"
              element={
                <PrivateRoute Component={KelasPage} Role={["STUDENT"]} />
              }
            />
            <Route
              path="/kelas/detail/:id"
              element={
                <PrivateRoute
                  Component={DetailKelasSiswaPage}
                  Role={["STUDENT"]}
                />
              }
            />
            <Route
              path="/mata-pelajaran"
              element={
                <PrivateRoute Component={MapelPage} Role={["STUDENT"]} />
              }
            />
            <Route
              path="/absensi"
              element={
                <PrivateRoute Component={AbsensiPage} Role={["STUDENT"]} />
              }
            />
            {/* #endregion */}
          </Routes>
        </SideBar>
      )}
    </>
  );
}

export default App;
