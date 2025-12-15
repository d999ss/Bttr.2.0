import { Section } from '../Section'

export const CareersSection = ({ active }: { active: boolean }) => {
  return (
    <Section
      active={active}
      header={{ index: '02', name: 'Careers' }}
      title="Join the team"
      context={
        <div className="flex flex-col gap-y-6">
          <p className="text-polar-500">
            We&apos;re always looking for talented designers, engineers, and
            strategists who want to do meaningful work with ambitious clients.
          </p>
          <a
            href="mailto:hello@makebttr.com?subject=Careers at Bttr."
            className="text-white hover:underline"
          >
            Get in touch →
          </a>
        </div>
      }
    >
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-polar-50">Craft Over Process</h3>
          <p className="text-polar-500">
            We believe in the power of great design and engineering. We obsess
            over the details that make products feel exceptional.
          </p>
        </div>
        <div className="flex flex-col gap-y-1">
          <h3 className="text-polar-50">Ownership & Autonomy</h3>
          <p className="text-polar-500">
            We trust our team to make decisions and take ownership of their
            work. No micromanagement, just high standards and accountability.
          </p>
        </div>
        <div className="flex flex-col gap-y-1">
          <h3 className="text-polar-50">Client Partnership</h3>
          <p className="text-polar-500">
            We work alongside our clients as true partners, not just vendors.
            Their success is our success.
          </p>
        </div>
      </div>
    </Section>
  )
}
