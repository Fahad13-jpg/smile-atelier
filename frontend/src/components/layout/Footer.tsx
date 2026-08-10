import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-inverse-background text-inverse-foreground">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="font-display text-xl mb-3">Lucent</p>
            <p className="text-sm opacity-70">
              Premium dental care, designed around you.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Explore</p>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Clinic</li>
              <li>Treatments</li>
              <li>Team</li>
              <li>Journal</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Contact</p>
            <p className="text-sm opacity-70">hello@lucentdental.demo</p>
          </div>
        </div>
        <p className="mt-16 text-xs opacity-50">
          © 2026 Lucent Dental Studio — portfolio demo project.
        </p>
      </Container>
    </footer>
  );
}