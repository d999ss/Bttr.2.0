'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import DashboardOutlined from '@mui/icons-material/DashboardOutlined'
import FolderOutlined from '@mui/icons-material/FolderOutlined'
import ReceiptOutlined from '@mui/icons-material/ReceiptOutlined'
import ScheduleOutlined from '@mui/icons-material/ScheduleOutlined'
import SupportAgentOutlined from '@mui/icons-material/SupportAgentOutlined'
import MonitorHeartOutlined from '@mui/icons-material/MonitorHeartOutlined'
import { ResourceLayout, ResourceSection } from './ResourceLayout'

export const ClientHubPage = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'dashboard', title: 'Dashboard' },
    { id: 'projects', title: 'Projects' },
    { id: 'hours', title: 'Hours Tracking' },
    { id: 'invoices', title: 'Invoices' },
    { id: 'support', title: 'Support' },
    { id: 'get-started', title: 'Get Started' },
  ]

  return (
    <ResourceLayout
      title="Client Hub"
      toc={tocItems}
    >
      <ResourceSection id="overview" title="Overview">
        <p className="text-lg">Your dedicated command center for complete project transparency.</p>
        <p className="dark:text-polar-300 text-gray-500">
          The Client Hub is a dedicated portal where you can monitor progress, track hours,
          view system status, and access all project resources in one place. No more chasing
          updates or wondering about project status.
        </p>
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
      </ResourceSection>

      <ResourceSection id="dashboard" title="Dashboard">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D2A62C]/10">
            <DashboardOutlined className="text-[#D2A62C]" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Your project at a glance</h3>
            <p className="dark:text-polar-300 text-gray-500">
              The dashboard provides an immediate overview of your engagement with Bttr.
              See your hours balance, active projects, recent activity, and system health
              all in one view.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="dark:bg-polar-800 flex flex-col gap-2 rounded-xl bg-gray-50 p-4">
            <h4 className="font-medium">Hours Balance</h4>
            <p className="dark:text-polar-400 text-sm text-gray-500">
              Track your retainer hours in real-time. See how many hours remain,
              when they renew, and your utilization rate.
            </p>
          </div>
          <div className="dark:bg-polar-800 flex flex-col gap-2 rounded-xl bg-gray-50 p-4">
            <h4 className="font-medium">System Status</h4>
            <p className="dark:text-polar-400 text-sm text-gray-500">
              Live monitoring of your deployed applications. Uptime percentage,
              response times, and operational status at a glance.
            </p>
          </div>
          <div className="dark:bg-polar-800 flex flex-col gap-2 rounded-xl bg-gray-50 p-4">
            <h4 className="font-medium">Activity Feed</h4>
            <p className="dark:text-polar-400 text-sm text-gray-500">
              See what we have been working on. Every hour logged, feature shipped,
              and milestone reached appears in your activity stream.
            </p>
          </div>
          <div className="dark:bg-polar-800 flex flex-col gap-2 rounded-xl bg-gray-50 p-4">
            <h4 className="font-medium">Quick Actions</h4>
            <p className="dark:text-polar-400 text-sm text-gray-500">
              One-click access to submit support tickets, view invoices,
              or jump directly to your live site or staging environment.
            </p>
          </div>
        </div>
      </ResourceSection>

      <ResourceSection id="projects" title="Projects">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D2A62C]/10">
            <FolderOutlined className="text-[#D2A62C]" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Complete project visibility</h3>
            <p className="dark:text-polar-300 text-gray-500">
              Every project you have with Bttr. lives in your hub. Track progress through
              discovery, design, development, and launch phases with clear milestone indicators.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">Milestone Progress</h4>
            <p className="dark:text-polar-300 text-gray-500">
              Visual progress tracking through each phase of your project. Know exactly
              where things stand without needing to ask.
            </p>
          </div>
          <div className="dark:bg-polar-800 flex items-center justify-between rounded-xl bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-medium text-white">1</div>
              <span className="text-sm">Discovery</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-sm font-medium text-white">2</div>
              <span className="text-sm">Design</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D2A62C] text-sm font-medium text-white">3</div>
              <span className="text-sm">Development</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="dark:bg-polar-700 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-medium">4</div>
              <span className="dark:text-polar-500 text-sm text-gray-400">Launch</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-medium">Resource Links</h4>
          <p className="dark:text-polar-300 text-gray-500">
            Direct access to everything related to your project. Live site, staging environment,
            Figma designs, GitHub repository, and documentation all linked in one place.
          </p>
        </div>
      </ResourceSection>

      <ResourceSection id="hours" title="Hours Tracking">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D2A62C]/10">
            <ScheduleOutlined className="text-[#D2A62C]" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Transparent time tracking</h3>
            <p className="dark:text-polar-300 text-gray-500">
              Every hour we work is logged and visible to you. See exactly what we worked on,
              when, and for how long. Complete transparency into how your retainer is utilized.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="dark:border-polar-700 dark:divide-polar-700 divide-y divide-gray-200 border-y border-gray-200 [&>li]:py-2">
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Detailed activity logs with descriptions
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Hours breakdown by project
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Monthly utilization summaries
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Automatic renewal tracking
            </li>
          </ul>
        </div>
      </ResourceSection>

      <ResourceSection id="invoices" title="Invoices">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D2A62C]/10">
            <ReceiptOutlined className="text-[#D2A62C]" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Billing at your fingertips</h3>
            <p className="dark:text-polar-300 text-gray-500">
              Access your complete billing history anytime. View, download, and track payment
              status for all invoices. No more digging through email for receipts.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">Invoice History</h4>
            <p className="dark:text-polar-300 text-gray-500">
              Complete archive of all invoices with status tracking.
              See what has been paid, what is pending, and what is upcoming.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">Easy Downloads</h4>
            <p className="dark:text-polar-300 text-gray-500">
              Download PDF invoices instantly for your records or
              to forward to your accounting team.
            </p>
          </div>
        </div>
      </ResourceSection>

      <ResourceSection id="support" title="Support">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D2A62C]/10">
            <SupportAgentOutlined className="text-[#D2A62C]" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Direct line to our team</h3>
            <p className="dark:text-polar-300 text-gray-500">
              Submit support tickets directly from your hub. Report bugs, request features,
              or ask questions. Every ticket is tracked and you will receive updates as we
              work through your request.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <ul className="dark:border-polar-700 dark:divide-polar-700 divide-y divide-gray-200 border-y border-gray-200 [&>li]:py-2">
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Bug reports with priority tracking
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Feature requests and enhancements
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              General questions and support
            </li>
            <li>
              <CheckOutlined className="mr-3" fontSize="inherit" />
              Email notifications on updates
            </li>
          </ul>
        </div>
      </ResourceSection>

      <ResourceSection id="get-started" title="Get Started">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D2A62C]/10">
            <MonitorHeartOutlined className="text-[#D2A62C]" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">Access your hub today</h3>
            <p className="dark:text-polar-300 text-gray-500">
              Every Bttr. client gets access to the Client Hub as part of their engagement.
              If you are an existing client, log in to access your dashboard. If you are
              considering working with us, this is what you can expect.
            </p>
          </div>
        </div>
      </ResourceSection>

      {/* Call to Action */}
      <div className="dark:border-polar-700 flex flex-col border-t border-gray-200 pt-16">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl">Ready for complete project transparency?</h3>
            <p className="dark:text-polar-300 text-center text-gray-700 md:w-[440px]">
              Start a conversation about how Bttr. can help design and engineer
              your next mission critical system.
            </p>
          </div>
          <div className="flex gap-4">
            <GetStartedButton
              size="lg"
              text="Start a Conversation"
              className="dark:hover:bg-polar-50 rounded-full bg-black font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-black"
            />
          </div>
        </div>
      </div>
    </ResourceLayout>
  )
}
