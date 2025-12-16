'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import { ResourceLayout, ResourceSection } from './ResourceLayout'

export const WhyBttrPage = () => {
  const tocItems = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'real-constraints', title: 'Built for Real Constraints' },
    { id: 'longevity', title: 'Designed for Longevity' },
    { id: 'ownership', title: 'Ownership over Handoff' },
    { id: 'how-we-work', title: 'How We Work' },
    { id: 'client-hub', title: 'Client Hub' },
  ]

  return (
    <ResourceLayout
      title="Why Bttr. is different"
      toc={tocItems}
    >
      <ResourceSection id="introduction" title="Introduction">
        <p className="text-lg">Bttr. operates where complexity, regulation, and ambition intersect.</p>
        <p className="dark:text-polar-300 text-gray-500">
          We design, build, and operate mission critical digital products for organizations
          where failure is not an option. Traditional agencies deliver artifacts. Bttr. delivers systems.
        </p>
        <blockquote className="dark:border-polar-700 flex flex-col gap-y-4 border border-gray-200 p-4">
          <p>
            Senior leaders at GE and GE Aerospace trust Bttr. to design and engineer
            systems that operate under real world constraints.
          </p>
        </blockquote>
      </ResourceSection>

      <ResourceSection id="real-constraints" title="Built for Real Constraints">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">
            We understand that your systems operate in the real world.
          </h3>
          <p className="dark:text-polar-300 text-gray-500">
            Regulatory requirements, security demands, operational pressures, and business
            constraints are not obstacles to work around. They are the environment we design for.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ul className="dark:border-polar-700 dark:divide-polar-700 divide-y divide-gray-200 border-y border-gray-200 [&>li]:py-2">
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Complex regulatory environments are our specialty
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Security and compliance built in from day one
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Enterprise-grade architecture for demanding workloads
            </li>
          </ul>
        </div>
      </ResourceSection>

      <ResourceSection id="longevity" title="Designed for Longevity">
        <div className="flex flex-col gap-2">
          <h3>Systems that endure</h3>
          <p className="dark:text-polar-300 text-gray-500">
            We architect systems designed to endure operational load, regulatory scrutiny,
            and constant change. Our solutions are built to last, not to be replaced.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Adaptable architecture</h3>
          <p className="dark:text-polar-300 text-gray-500">
            Change is inevitable. We design systems that can evolve with your business,
            incorporating new requirements without requiring complete rebuilds.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Type-safe, modern foundations</h3>
          <p className="dark:text-polar-300 text-gray-500">
            We build on modern web platforms with type-safe architecture and
            cloud-native infrastructure, ensuring your systems remain maintainable
            and performant for years to come.
          </p>
        </div>
      </ResourceSection>

      <ResourceSection id="ownership" title="Ownership over Handoff">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3>We take responsibility</h3>
            <p className="dark:text-polar-300 text-gray-500">
              Bttr. takes responsibility for the systems we build. We do not hand off
              and disappear. Long term system stewardship beyond launch is our commitment.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Operational continuity</h3>
            <p className="dark:text-polar-300 text-gray-500">
              Design responsibility, engineering accountability, and operational continuity.
              We stay invested in the success of the systems we create.
            </p>
          </div>
        </div>
      </ResourceSection>

      <ResourceSection id="how-we-work" title="How We Work">
        <div className="flex flex-col gap-2">
          <h3>Disciplined process. Senior execution.</h3>
          <p className="dark:text-polar-300 text-gray-500">
            We are a small senior team building systems with real impact. Our process
            includes strategy and discovery, design systems and UX architecture,
            production engineering, and ongoing ownership and optimization.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Engagement models built for accountability</h3>
          <p className="dark:text-polar-300 text-gray-500">
            We structure engagements around accountability, outcomes, and long term value.
            Whether product and platform builds, strategic retainers, or long term
            platform ownership, we design our relationships to deliver results.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3>Clarity, speed, and execution</h3>
          <p className="dark:text-polar-300 text-gray-500">
            Bttr. consistently delivers clarity, speed, and execution across complex,
            regulated environments. Working with us feels less like hiring an agency
            and more like extending your core team.
          </p>
        </div>
      </ResourceSection>

      <ResourceSection id="client-hub" title="Client Hub">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">
            Complete transparency into your projects
          </h3>
          <p className="dark:text-polar-300 text-gray-500">
            Every client gets access to our Client Hub, a dedicated portal where you can
            monitor progress, track hours, view system status, and access all project resources
            in one place. No more chasing updates or wondering about project status.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <ul className="dark:border-polar-700 dark:divide-polar-700 divide-y divide-gray-200 border-y border-gray-200 [&>li]:py-2">
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Real-time system status and uptime monitoring
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Project progress and milestone tracking
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Hours balance with detailed activity logs
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Direct access to invoices and billing history
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Integrated support ticket system
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Links to live sites, staging environments, and design files
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h3>Lifecycle visibility</h3>
            <p className="dark:text-polar-300 text-gray-500">
              See exactly what we are working on, when hours are logged, and how your
              project is performing. Our commitment to lifecycle ownership means you
              always know the status of the systems we build for you.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3>Operational continuity</h3>
            <p className="dark:text-polar-300 text-gray-500">
              Monitor uptime, response times, and system health for your deployed
              applications. The Client Hub delivers on our promise of long-term
              stewardship with real metrics, not just words.
            </p>
          </div>
        </div>
      </ResourceSection>

      {/* Call to Action */}
      <div className="dark:border-polar-700 flex flex-col border-t border-gray-200 pt-16">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl">Ready to build something that lasts?</h3>
            <p className="dark:text-polar-300 text-center text-gray-700 md:w-[440px]">
              Start a conversation about how Bttr. can help design and engineer
              your next mission critical system.
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
