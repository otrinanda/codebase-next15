"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useModalStore } from "@/lib/stores/modalStore";
import { useThemeStore } from "@/lib/stores/themeStore";
import { useToastStore } from "@/lib/stores/toastStore";

export default function DesignSystemDocs() {
  const { isDarkMode, toggleDarkMode } = useThemeStore();
  const { openConfirmationModal } = useModalStore();
  const { addToast } = useToastStore();

  const handleThemeChange = () => {
    openConfirmationModal(
      "Ubah Tema",
      `Apakah Anda yakin ingin mengubah ke tema ${
        isDarkMode ? "terang" : "gelap"
      }?`,
      toggleDarkMode
    );
  };

  const handleShowToast = () => {
    addToast({
      title: "Notifikasi Demo",
      description: "Ini adalah contoh notifikasi menggunakan toast kustom.",
      variant: "success",
      duration: 3000,
    });
  };
  const handleShowMultipleToasts = () => {
    addToast({
      title: "Toast Pertama",
      description: "Muncul pertama dan akan didorong ke atas.",
      variant: "success",
      duration: 3000,
    });
    setTimeout(() => {
      addToast({
        title: "Toast Kedua",
        description: "Muncul kedua, mendorong toast pertama ke atas.",
        variant: "success",
        duration: 3000,
      });
    }, 1000);
    setTimeout(() => {
      addToast({
        title: "Toast Error",
        description: "Contoh toast error.",
        variant: "error",
        duration: 3000,
      });
    }, 2000);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-heading text-4xl font-bold tracking-tight text-primary-500 mb-8">
        Design System Documentation
      </h1>

      {/* Warna */}
      <section className="mb-12">
        <h2 className="text-subheading text-2xl font-semibold text-primary-600 mb-4">
          Warna
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          {[
            { name: "50", value: "var(--primary-50)", hex: "#f9ede8" },
            { name: "100", value: "var(--primary-100)", hex: "#f4d7cd" },
            { name: "200", value: "var(--primary-200)", hex: "#e9beac" },
            { name: "300", value: "var(--primary-300)", hex: "#dea58b" },
            { name: "400", value: "var(--primary-400)", hex: "#c98e73" },
            { name: "500", value: "var(--primary-500)", hex: "#a47864" },
            { name: "600", value: "var(--primary-600)", hex: "#8f6453" },
            { name: "700", value: "var(--primary-700", hex: "#7a5244" },
            { name: "800", value: "var(--primary-800)", hex: "#664336" },
            { name: "900", value: "var(--primary-900)", hex: "#52362b" },
            { name: "950", value: "var(--primary-950)", hex: "#3d271f" },
          ].map((color) => (
            // <div key={color.name} className="flex flex-col items-center">
            //   <div
            //     className="h-16 w-full rounded-lg"
            //     style={{ backgroundColor: color.value }}
            //   ></div>
            //   <p className="text-body text-sm mt-2">Primary-{color.name}</p>
            //   <p className="text-caption text-primary-700">{color.hex}</p>
            // </div>
            <Card
              key={color.name}
              className="animate-scale-in duration-300 animate-hover-scale"
              style={{ backgroundColor: color.value }}
            >
              <CardHeader>
                <CardTitle className="text-body">
                  Primary-{color.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-caption">{color.hex}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tipografi */}
      <section className="mb-12">
        <h2 className="text-subheading text-2xl font-semibold text-primary-600 mb-4">
          Tipografi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            {
              role: "Heading",
              className: "text-heading text-4xl",
              text: "Heading (36px)",
            },
            {
              role: "Subheading",
              className: "text-subheading text-xl",
              text: "Subheading (20px)",
            },
            {
              role: "Body",
              className: "text-body text-base",
              text: "Body Text (16px)",
            },
            {
              role: "Caption",
              className: "text-caption",
              text: "Caption Text (11px)",
            },
            {
              role: "Button",
              className: "text-button",
              text: "Button Text (14px, SemiBold)",
            },
            {
              role: "Display",
              className: "text-display text-3xl",
              text: "Display Text (30px)",
            },
          ].map((typography) => (
            <div key={typography.role} className="border-t pt-2">
              <p
                className={typography.className}
                style={{ color: "var(--primary-500)" }}
              >
                {typography.text}
              </p>
              <p className="text-caption text-primary-700">{typography.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Layout */}
      <section className="mb-12">
        <h2 className="text-subheading text-2xl font-semibold text-primary-600 mb-4">
          Layout
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-subheading text-xl font-medium text-primary-700 mb-2">
              Container
            </h3>
            <div className="bg-[var(--muted)] p-4 rounded-lg">
              <div className="container bg-[var(--card)] p-4 rounded-lg">
                <p className="text-body text-primary-900">
                  Ini adalah container dengan lebar maksimum responsif (640px,
                  768px, 1024px, 1280px).
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-subheading text-xl font-medium text-primary-700 mb-2">
              Grid 12 Kolom
            </h3>
            <div className="grid-12">
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[var(--primary-100)] p-4 rounded-lg">
                <p className="text-body">Kolom 1</p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[var(--primary-100)] p-4 rounded-lg">
                <p className="text-body">Kolom 2</p>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[var(--primary-100)] p-4 rounded-lg">
                <p className="text-body">Kolom 3</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-subheading text-xl font-medium text-primary-700 mb-2">
              Grid Sidebar
            </h3>
            <div className="grid-sidebar">
              <aside className="bg-[var(--muted)] p-4 rounded-lg">
                <p className="text-body text-primary-900">
                  Sidebar (250px di md+)
                </p>
              </aside>
              <main className="bg-[var(--card)] p-4 rounded-lg">
                <p className="text-body text-primary-900">Konten Utama</p>
              </main>
            </div>
          </div>
        </div>
        {/* Grid Gallery */}
        <div>
          <h3 className="text-subheading text-xl font-medium text-primary-700 mb-2">
            Grid Gallery
          </h3>
          <p className="text-body text-primary-900 mb-4">
            Grid untuk galeri atau kartu, responsif dari 1 kolom di mobile, 2 di
            sm, 3 di lg.
          </p>
          <div className="grid-gallery">
            <Card className="animate-scale-in duration-300 animate-hover-scale">
              <CardHeader>
                <CardTitle className="text-subheading">Kartu 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body">Deskripsi kartu pertama.</p>
              </CardContent>
            </Card>
            <Card className="animate-scale-in duration-300 delay-100 animate-hover-scale">
              <CardHeader>
                <CardTitle className="text-subheading">Kartu 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body">Deskripsi kartu kedua.</p>
              </CardContent>
            </Card>
            <Card className="animate-scale-in duration-300 delay-200 animate-hover-scale">
              <CardHeader>
                <CardTitle className="text-subheading">Kartu 3</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body">Deskripsi kartu ketiga.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Grid Hero */}
        <div>
          <h3 className="text-subheading text-xl font-medium text-primary-700 mb-2">
            Grid Hero
          </h3>
          <p className="text-body text-primary-900 mb-4">
            Grid untuk hero section, dengan teks dan gambar berdampingan di lg+.
          </p>
          <div className="grid-hero">
            <div className="animate-fade-in duration-300">
              <h4 className="text-heading text-3xl font-bold text-primary-500 mb-4">
                Selamat Datang
              </h4>
              <p className="text-body text-primary-900 mb-4">
                Ini adalah teks hero untuk menarik perhatian pengguna.
              </p>
              <Button variant="default" className="text-button">
                Pelajari Lebih Lanjut
              </Button>
            </div>
            <div className="bg-[var(--primary-100)] h-64 rounded-lg animate-scale-in duration-300">
              <p className="text-body p-4">Placeholder untuk gambar</p>
            </div>
          </div>
        </div>

        {/* Grid Form */}
        <div>
          <h3 className="text-subheading text-xl font-medium text-primary-700 mb-2">
            Grid Form
          </h3>
          <p className="text-body text-primary-900 mb-4">
            Grid untuk formulir, dengan input berdampingan di sm+.
          </p>
          <div className="grid-form">
            <Input
              placeholder="Nama Depan"
              className="animate-slide-in duration-300"
            />
            <Input
              placeholder="Nama Belakang"
              className="animate-slide-in duration-300 delay-100"
            />
            <Input
              placeholder="Email"
              type="email"
              className="animate-slide-in duration-300 delay-200"
            />
            <Input
              placeholder="Telepon"
              type="tel"
              className="animate-slide-in duration-300 delay-300"
            />
          </div>
        </div>
      </section>
      {/* Contoh Aksi dengan Modal */}
      <section className="mb-12">
        <h2 className="text-subheading text-2xl font-semibold text-primary-600 mb-4">
          Contoh Aksi
        </h2>
        <p className="text-body text-primary-900 mb-4">
          Klik tombol di bawah untuk memicu modal konfirmasi.
        </p>
        <Button variant="default" onClick={handleThemeChange} className="">
          Ubah Tema
        </Button>
        <Button
          variant="outline"
          onClick={handleShowToast}
          className="animate-scale-in duration-300"
        >
          Tampilkan Toast
        </Button>
        <Button
          variant="secondary"
          onClick={handleShowMultipleToasts}
          className="animate-scale-in duration-300"
        >
          Tampilkan Multiple Toasts
        </Button>
      </section>

      {/* Animasi */}
      <section className="mb-12">
        <h2 className="text-subheading text-2xl font-semibold text-primary-600 mb-4">
          Animasi
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-subheading text-xl font-medium text-primary-700 mb-2">
              Fade In
            </h3>
            <div className="bg-[var(--card)] p-4 rounded-lg animate-fade-in duration-500">
              <p className="text-body text-primary-900">
                Elemen ini memudar masuk selama 500ms (digunakan di header dan
                konten utama).
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-subheading text-xl font-medium text-primary-700 mb-2">
              Slide Up
            </h3>
            <div className="bg-[var(--card)] p-4 rounded-lg animate-slide-up duration-500">
              <p className="text-body text-primary-900">
                Elemen ini meluncur ke atas selama 500ms (digunakan di footer).
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-subheading text-xl font-medium text-primary-700 mb-2">
              Slide In (Sidebar)
            </h3>
            <div className="bg-[var(--muted)] p-4 rounded-lg animate-slide-in duration-300">
              <p className="text-body text-primary-900">
                Elemen ini meluncur dari kiri selama 300ms (digunakan di
                sidebar).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Komponen */}
      <section className="mb-12">
        <h2 className="text-subheading text-2xl font-semibold text-primary-600 mb-4">
          Komponen
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Button
            variant="default"
            className="text-button animate-scale-in duration-300"
          >
            Primary
          </Button>
          <Button
            variant="secondary"
            className="text-button animate-scale-in duration-300"
          >
            Secondary
          </Button>
          <Button
            variant="destructive"
            className="text-button animate-scale-in duration-300"
          >
            Destructive
          </Button>
          <Button
            variant="ghost"
            className="text-button animate-scale-in duration-300"
          >
            Ghost
          </Button>
          <Button
            variant="link"
            className="text-button animate-scale-in duration-300"
          >
            Link
          </Button>
          <Button
            variant="outline"
            className="text-button animate-scale-in duration-300"
          >
            Outline
          </Button>
        </div>
      </section>
    </div>
  );
}
