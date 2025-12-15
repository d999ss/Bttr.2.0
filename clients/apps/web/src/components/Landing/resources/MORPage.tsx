import GetStartedButton from '@/components/Auth/GetStartedButton'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import CloseOutlined from '@mui/icons-material/CloseOutlined'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ResourceLayout, ResourceSection } from './ResourceLayout'

const Benefit = ({
  children,
  positive = true,
}: React.PropsWithChildren<{ positive?: boolean }>) => {
  return (
    <li
      className={twMerge(
        'flex flex-row items-start gap-x-2',
        positive ? '' : 'dark:text-polar-500 text-gray-400',
      )}
    >
      {positive ? (
        <CheckOutlined className="mt-1 mr-2" fontSize="inherit" />
      ) : (
        <CloseOutlined className="mt-1 mr-2" fontSize="inherit" />
      )}
      <span>{children}</span>
    </li>
  )
}

export const MORPage = () => {
  const tocItems = [
    { id: 'introduction', title: 'Introduction' },
    {
      id: 'traditional-vs-bttr',
      title: 'Traditional Agencies vs. Bttr.',
    },
    { id: 'what-ownership-means', title: 'What Ownership Means' },
  ]

  return (
    <ResourceLayout title="Lifecycle Ownership" toc={tocItems}>
      <ResourceSection id="introduction" title="Introduction">
        <p className="text-lg">Beyond project handoff</p>
        <p className="dark:text-polar-300 text-gray-500">
          Most agencies finish a project and disappear. We stay accountable.
          Lifecycle Ownership means we remain invested in your product&apos;s
          success long after launch—monitoring, maintaining, and evolving
          alongside your business.
        </p>
      </ResourceSection>

      <ResourceSection id="traditional-vs-bttr" title="Traditional Agencies vs. Bttr." className="gap-y-8">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Traditional Agencies</h3>
            <p className="dark:text-polar-300 text-gray-500">
              Conventional agencies operate on a project-by-project basis.
              They build, deliver, and move on—leaving you to manage maintenance,
              bugs, and future development.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <ul className="dark:border-polar-700 dark:divide-polar-700 divide-y divide-gray-200 border-y border-gray-200 [&>li]:py-2">
              <Benefit>
                Fixed deliverables and defined scope
              </Benefit>
              <Benefit>
                Clear project timeline
              </Benefit>
              <Benefit positive={false}>
                Support ends at handoff
              </Benefit>
              <Benefit positive={false}>
                You inherit all maintenance responsibilities
              </Benefit>
              <Benefit positive={false}>
                Knowledge leaves with the team
              </Benefit>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Bttr.&apos;s Lifecycle Ownership</h3>
            <p className="dark:text-polar-300 text-gray-500">
              We treat your product as if it were our own. Beyond building,
              we stay engaged—handling maintenance, performance monitoring,
              and continuous improvement as your needs evolve.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <ul className="dark:border-polar-700 dark:divide-polar-700 divide-y divide-gray-200 border-y border-gray-200 [&>li]:py-2">
              <Benefit>
                Long-term partnership beyond launch
              </Benefit>
              <Benefit>
                Ongoing maintenance and bug fixes included
              </Benefit>
              <Benefit>
                Performance monitoring and optimization
              </Benefit>
              <Benefit>
                Knowledge retention and documentation
              </Benefit>
              <Benefit positive={false}>
                Requires ongoing engagement commitment
              </Benefit>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg">Choose a traditional agency if...</h3>
          </div>
          <div className="flex flex-col gap-2">
            <ul className="dark:border-polar-700 dark:divide-polar-700 divide-y divide-gray-200 border-y border-gray-200 [&>li]:py-2">
              <Benefit>
                You have a capable internal team to take over
              </Benefit>
              <Benefit>
                The project is a one-time marketing site or campaign
              </Benefit>
              <Benefit>
                You prefer complete control over future development
              </Benefit>
            </ul>
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg">Choose Bttr. if...</h3>
            </div>
            <div className="flex flex-col gap-2">
              <ul className="dark:border-polar-700 dark:divide-polar-700 divide-y divide-gray-200 border-y border-gray-200 [&>li]:py-2">
                <Benefit>
                  Your product is mission-critical to your business
                </Benefit>
                <Benefit>
                  You need senior engineering expertise long-term
                </Benefit>
                <Benefit>
                  You operate in regulated environments requiring compliance
                </Benefit>
                <Benefit>
                  You want a partner, not just a vendor
                </Benefit>
              </ul>
            </div>
          </div>
        </div>
      </ResourceSection>

      <ResourceSection
        id="what-ownership-means"
        title="What Ownership Means"
        className="gap-y-8"
      >
        <div className="flex flex-col gap-2">
          <p className="dark:text-polar-300 text-gray-500">
            Lifecycle Ownership isn&apos;t a marketing term—it&apos;s how we
            structure every engagement. From the first conversation, we plan
            for the long term.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Continuous Monitoring</h3>
          <p className="dark:text-polar-300 text-gray-500">
            We proactively monitor your systems for performance, security,
            and reliability. Issues are caught and addressed before they
            impact your users.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Maintenance Included</h3>
          <p className="dark:text-polar-300 text-gray-500">
            Bug fixes, security patches, and dependency updates are part
            of our engagement—not billable surprises. Your product stays
            healthy without hidden costs.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Evolving Together</h3>
          <p className="dark:text-polar-300 text-gray-500">
            As your business grows, we adapt. New features, scaling challenges,
            and strategic pivots are handled by the same team that built your
            foundation.
          </p>
        </div>

        <div className="dark:border-polar-700 flex flex-col gap-2 border-t border-gray-200 pt-4">
          <p className="dark:text-polar-300 text-gray-500">
            This model works because we&apos;re selective about the projects
            we take on. Every Bttr. engagement is designed for longevity—
            both for your product and our relationship.
          </p>
        </div>
      </ResourceSection>

      {/* Call to Action */}
      <div className="dark:border-polar-700 flex flex-col border-t border-gray-200 pt-16">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl">Ready for a different kind of partnership?</h3>
            <p className="dark:text-polar-300 text-center text-gray-700 md:w-[440px]">
              Join teams who trust Bttr. for mission-critical products that
              demand long-term accountability.
            </p>
          </div>
          <GetStartedButton
            size="lg"
            text="Start a Conversation"
            className="dark:hover:bg-polar-50 rounded-full bg-black font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black"
          />
        </div>
      </div>
    </ResourceLayout>
  )
}
