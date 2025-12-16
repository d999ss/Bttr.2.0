import { Section } from '../Section'

const clients = [
  { name: 'General Electric', industry: 'Aerospace & Energy' },
  { name: 'GE Aerospace', industry: 'Aviation' },
  { name: 'GE Vernova', industry: 'Energy Technology' },
  { name: 'Alterra Mountain Company', industry: 'Travel & Recreation' },
  { name: 'Ikon Pass', industry: 'Outdoor Recreation' },
  { name: 'Allergan Aesthetics', industry: 'Healthcare' },
  { name: 'Allergan Data Labs', industry: 'Healthcare Technology' },
  { name: 'BOTOX Cosmetic', industry: 'Healthcare' },
  { name: 'JUVÉDERM', industry: 'Healthcare' },
  { name: 'Allē', industry: 'Healthcare Technology' },
  { name: 'Tiger BioSciences', industry: 'Life Sciences' },
  { name: 'Tarform', industry: 'Electric Vehicles' },
  { name: 'Air Company', industry: 'Clean Technology' },
  { name: 'Ciitizen', industry: 'Healthcare Technology' },
  { name: 'Helix Homes', industry: 'Real Estate' },
  { name: 'Revaire', industry: 'Beauty & Wellness' },
  { name: 'AMI', industry: 'Medical Devices' },
  { name: 'FleetPulse', industry: 'Logistics Technology' },
  { name: 'Atom Bank', industry: 'Financial Services' },
  { name: 'Spark', industry: 'Technology' },
  { name: 'Ross J Barr', industry: 'Beauty & Wellness' },
  { name: 'Advantage', industry: 'Technology' },
]

export const InvestorsSection = ({
  active,
}: {
  investors?: { name: string; company: string }[]
  active: boolean
}) => {
  return (
    <Section
      active={active}
      header={{ index: '03', name: 'Clients' }}
      title="Trusted by industry leaders"
      context={
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {clients.map((client) => (
              <div className="flex flex-col" key={client.name}>
                <h4>{client.name}</h4>
                <span className="text-polar-500">{client.industry}</span>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <p>
        We partner with ambitious organizations across healthcare, aerospace,
        travel, and technology to design and build products that transform
        their industries.
      </p>
    </Section>
  )
}
