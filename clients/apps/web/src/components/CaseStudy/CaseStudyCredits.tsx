'use client'

interface CaseStudyCreditsProps {
  client: string
  location: string
  sectors: string[]
  team: string[]
}

export default function CaseStudyCredits({
  client,
  location,
  sectors,
  team,
}: CaseStudyCreditsProps) {
  return (
    <section className="w-full border-t border-gray-200 px-8 py-16 md:px-16 lg:px-24">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-900">Client</h3>
          <p className="text-sm text-gray-600">{client}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-900">Location</h3>
          <p className="text-sm text-gray-600">{location}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-900">Sector</h3>
          <div className="space-y-1">
            {sectors.map((sector, i) => (
              <p key={i} className="text-sm text-gray-600">
                {sector}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-900">Team</h3>
          <div className="space-y-1">
            {team.map((member, i) => (
              <p key={i} className="text-sm text-gray-600">
                {member}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
