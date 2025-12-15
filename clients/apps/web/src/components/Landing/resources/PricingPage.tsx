'use client'

import ArrowOutwardOutlined from '@mui/icons-material/ArrowOutwardOutlined'
import Link from 'next/link'
import { ResourceLayout, ResourceSection } from './ResourceLayout'

export const PricingPage = () => {
  const toc = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'embedded-team', title: 'Embedded Team' },
    { id: 'project-based', title: 'Project-Based' },
    { id: 'advisory', title: 'Advisory & Strategy' },
    { id: 'what-to-expect', title: 'What to Expect' },
  ]

  return (
    <ResourceLayout title="Engagement Models" toc={toc}>
      <ResourceSection id="introduction" title="Introduction">
        <div className="flex flex-col gap-2">
          <h3>Flexible engagement, real accountability</h3>
          <p className="dark:text-polar-300 text-gray-500">
            We structure engagements around your needs, not billable hours.
            Every model includes our commitment to lifecycle ownership—
            long-term accountability beyond the initial project.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3>Transparent Investment</h3>
          <p className="dark:text-polar-300 text-gray-500">
            No hidden fees, no surprise scope creep. We define clear
            deliverables and honest timelines upfront, so you know exactly
            what you&apos;re investing in.
          </p>
        </div>
      </ResourceSection>

      <ResourceSection id="embedded-team" title="Embedded Team">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Senior engineers, integrated with your team</h3>
          <p className="dark:text-polar-300 text-gray-500">
            Our engineers work alongside your internal team, bringing expertise
            in design, engineering, and product strategy. This model works best
            for ongoing product development and companies building core platforms.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Best for</h3>
          <ul className="space-y-2">
            <li>
              Long-term product development
            </li>
            <li>
              Teams needing senior expertise without full-time hiring
            </li>
            <li>
              Complex systems requiring deep domain knowledge
            </li>
          </ul>
        </div>

        <div className="dark:text-polar-300 dark:bg-polar-800 bg-gray-50 p-4 text-sm text-gray-500">
          Embedded engagements typically run 6+ months with dedicated team
          members working 20-40 hours per week.
        </div>
      </ResourceSection>

      <ResourceSection id="project-based" title="Project-Based">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Defined scope, clear outcomes</h3>
          <p className="dark:text-polar-300 text-gray-500">
            For projects with well-defined requirements, we deliver end-to-end
            solutions—from discovery through launch. Fixed investment with
            ongoing maintenance included in our lifecycle ownership model.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Best for</h3>
          <ul className="space-y-2">
            <li>
              New product launches
            </li>
            <li>
              Platform rebuilds or migrations
            </li>
            <li>
              Specific feature development
            </li>
          </ul>
        </div>

        <div className="dark:text-polar-300 dark:bg-polar-800 bg-gray-50 p-4 text-sm text-gray-500">
          Project timelines vary from 8-24 weeks depending on scope and
          complexity. All projects include 90 days of post-launch support.
        </div>
      </ResourceSection>

      <ResourceSection id="advisory" title="Advisory & Strategy">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Strategic guidance for critical decisions</h3>
          <p className="dark:text-polar-300 text-gray-500">
            Technical leadership and product strategy for teams navigating
            complex challenges. Architecture reviews, technology selection,
            and roadmap planning—without the overhead of a full engagement.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Best for</h3>
          <ul className="space-y-2">
            <li>
              Technical due diligence
            </li>
            <li>
              Architecture and technology decisions
            </li>
            <li>
              Product strategy and roadmapping
            </li>
          </ul>
        </div>

        <div className="dark:text-polar-300 dark:bg-polar-800 bg-gray-50 p-4 text-sm text-gray-500">
          Advisory engagements are structured as retainers or project-based
          consulting, typically 10-20 hours per month.
        </div>
      </ResourceSection>

      <ResourceSection id="what-to-expect" title="What to Expect">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Discovery call</h3>
          <p className="dark:text-polar-300 text-gray-500">
            Every engagement starts with a conversation. We learn about your
            business, constraints, and goals to determine if we&apos;re the
            right fit.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Proposal & scoping</h3>
          <p className="dark:text-polar-300 text-gray-500">
            For qualified opportunities, we provide a detailed proposal
            outlining approach, timeline, team composition, and investment.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Kickoff & execution</h3>
          <p className="dark:text-polar-300 text-gray-500">
            We move quickly from agreement to execution. Our team integrates
            with your workflows and communication tools from day one.
          </p>
        </div>

        <div className="dark:border-polar-700 flex flex-col gap-4 border-t border-gray-200 pt-4">
          <p>
            Ready to discuss your project? Let&apos;s start a conversation.
          </p>
          <Link
            href="/contact"
            className="w-fit border-b border-black pb-0.5 dark:border-white"
          >
            Get in touch
            <ArrowOutwardOutlined className="ml-2" fontSize="inherit" />
          </Link>
        </div>
      </ResourceSection>
    </ResourceLayout>
  )
}
