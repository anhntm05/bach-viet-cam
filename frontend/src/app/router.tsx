import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DevNav } from "@/shared/components/DevNav";

import { LoginPage } from "@/features/auth/pages/LoginPage";
import { RegisterPage } from "@/features/auth/pages/RegisterPage";
import { ForgotPage } from "@/features/auth/pages/ForgotPage";
import { NotFoundPage } from "@/shared/pages/NotFoundPage";
import { ForbiddenPage } from "@/shared/pages/ForbiddenPage";
import { DashboardPage } from "@/shared/pages/DashboardPage";
import { ProtectedRoute } from "@/shared/components/ProtectedRoute";
import { AppLayout } from "@/shared/components/AppLayout";

// Mobile — practice
import { PracticePage } from "@/features/practice/pages/PracticePage";
import { TunerPage } from "@/features/practice/pages/TunerPage";
import { MetronomePage } from "@/features/practice/pages/MetronomePage";
import { RecordingPage } from "@/features/practice/pages/RecordingPage";
import { AnalysisPage } from "@/features/practice/pages/AnalysisPage";
import { ErrorDetailPage } from "@/features/practice/pages/ErrorDetailPage";
import { SectionPage } from "@/features/practice/pages/SectionPage";
import { ComparePage } from "@/features/practice/pages/ComparePage";
import { HistoryPage } from "@/features/practice/pages/HistoryPage";
import { QualityCheckPage } from "@/features/practice/pages/QualityCheckPage";
import { ModesPage } from "@/features/practice/pages/ModesPage";
import { SongAnalysisPage } from "@/features/music-library/pages/SongAnalysisPage";

// Mobile — home
import { HomePage } from "@/features/home/pages/HomePage";
import { ProfilePage } from "@/features/home/pages/ProfilePage";

// Mobile — library
import { LibraryPage } from "@/features/music-library/pages/LibraryPage";
import { SongDetailPage } from "@/features/music-library/pages/SongDetailPage";
import { SheetPage } from "@/features/music-library/pages/SheetPage";
import { SavedPage } from "@/features/music-library/pages/SavedPage";
import { SongUploadPage } from "@/features/music-library/pages/SongUploadPage";

// Mobile — classes
import { AssignmentPage } from "@/features/classes/pages/AssignmentPage";
import { MyAssignmentsPage } from "@/features/classes/pages/MyAssignmentsPage";

// Mobile — ensemble & rental
import { EnsemblePage } from "@/features/ensemble/pages/EnsemblePage";
import { RentalPage } from "@/features/platform/pages/RentalPage";

// Desktop — teacher / classes
import { TeacherPage } from "@/features/classes/pages/TeacherPage";
import { ReviewPage } from "@/features/classes/pages/ReviewPage";
import { AssignmentFormPage } from "@/features/classes/pages/AssignmentFormPage";

// Desktop — library management
import { SongManagePage } from "@/features/music-library/pages/SongManagePage";
import { SongFormPage } from "@/features/music-library/pages/SongFormPage";
import { SheetManagePage } from "@/features/music-library/pages/SheetManagePage";

// Desktop — platform
import { AdminPage } from "@/features/platform/pages/AdminPage";
import { CategoriesPage } from "@/features/platform/pages/CategoriesPage";
import { RentalProviderPage } from "@/features/platform/pages/RentalProviderPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/403" element={<ForbiddenPage />} />

        <Route element={<ProtectedRoute />}>
          {/* ── Mobile screens — full-screen, no AppLayout sidebar ─────── */}

          {/* Home & profile */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Practice */}
          <Route path="/practice/:songId" element={<PracticePage />} />
          <Route path="/practice/:songId/tuner" element={<TunerPage />} />
          <Route path="/practice/:songId/metronome" element={<MetronomePage />} />
          <Route path="/practice/:songId/recording" element={<RecordingPage />} />
          <Route path="/practice/:songId/quality" element={<QualityCheckPage />} />
          <Route path="/practice/:songId/modes" element={<ModesPage />} />
          <Route path="/practice/:songId/analysis/:recordingId" element={<AnalysisPage />} />
          <Route path="/practice/:songId/error/:errorId" element={<ErrorDetailPage />} />
          <Route path="/practice/:songId/section" element={<SectionPage />} />
          <Route path="/practice/:songId/compare" element={<ComparePage />} />
          <Route path="/practice/:songId/history" element={<HistoryPage />} />
          <Route path="/practice/:songId/song-analysis" element={<SongAnalysisPage />} />

          {/* Library */}
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/library/upload" element={<SongUploadPage />} />
          <Route path="/library/:songId" element={<SongDetailPage />} />
          <Route path="/library/:songId/sheet" element={<SheetPage />} />
          <Route path="/saved" element={<SavedPage />} />

          {/* Classes */}
          <Route path="/assignments" element={<MyAssignmentsPage />} />
          <Route path="/assignment/:assignmentId" element={<AssignmentPage />} />

          {/* Ensemble & rental */}
          <Route path="/ensemble/:sessionId" element={<EnsemblePage />} />
          <Route path="/rental" element={<RentalPage />} />

          {/* ── Desktop screens — self-contained with DesktopSidebar ───── */}
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/teacher/review" element={<ReviewPage />} />
          <Route path="/teacher/assignments/new" element={<AssignmentFormPage />} />
          <Route path="/songs" element={<SongManagePage />} />
          <Route path="/songs/new" element={<SongFormPage />} />
          <Route path="/songs/:songId/edit" element={<SongFormPage />} />
          <Route path="/songs/sheets" element={<SheetManagePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/rental/provider" element={<RentalProviderPage />} />

          {/* ── Dashboard (AppLayout shell) ──────────────────────────── */}
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <DevNav />
    </BrowserRouter>
  );
}
