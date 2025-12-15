'use client'

import GetStartedButton from '@/components/Auth/GetStartedButton'
import CheckOutlined from '@mui/icons-material/CheckOutlined'
import CloseOutlined from '@mui/icons-material/CloseOutlined'
import { ResourceLayout, ResourceSection } from '../resources/ResourceLayout'

export const BttrVsAgenciesPage = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview' },
    { id: 'comparison', title: 'Feature Comparison' },
    { id: 'ownership', title: 'Ownership Model' },
    { id: 'why-bttr', title: 'Why Choose Bttr?' },
  ]

  return (
    <ResourceLayout title="Bttr vs Traditional Agencies" toc={tocItems}>
      <ResourceSection id="overview" title="Overview">
        <p className="dark:text-polar-300 text-gray-500">
          Traditional agencies deliver artifacts. Bttr delivers systems.
          While most agencies focus on project delivery and handoff,
          Bttr takes long-term responsibility for the systems we build.
        </p>
      </ResourceSection>

      <ResourceSection id="comparison" title="Feature Comparison">
        <div className="dark:border-polar-700 overflow-x-auto border border-gray-200">
          <table className="w-full">
            <thead className="dark:bg-polar-800 bg-gray-50">
              <tr className="dark:border-polar-700 border-b border-gray-200">
                <th className="dark:border-polar-700 border-r border-gray-200 p-4 text-left font-medium">
                  Capability
                </th>
                <th className="dark:border-polar-700 border-r border-gray-200 p-4 text-center font-medium">
                  Bttr
                </th>
                <th className="p-4 text-center font-medium">Traditional Agencies</th>
              </tr>
            </thead>
            <tbody className="dark:divide-polar-700 divide-y divide-gray-200">
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Long-term ownership
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Engineering depth
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Accountability beyond launch
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Senior execution
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Regulatory compliance expertise
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
              <tr>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4">
                  Systems delivery (not just artifacts)
                </td>
                <td className="dark:border-polar-700 border-r border-gray-200 p-4 text-center">
                  <CheckOutlined className="text-green-600" fontSize="small" />
                </td>
                <td className="p-4 text-center">
                  <CloseOutlined className="text-red-600" fontSize="small" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ResourceSection>

      <ResourceSection id="ownership" title="Ownership Model">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Traditional Agency Model</h3>
          <p className="dark:text-polar-300 text-gray-500">
            Most agencies operate on a project-based model: define scope, deliver artifacts,
            hand off, and move on. This leaves you responsible for maintenance, evolution,
            and dealing with technical debt they may have introduced.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">The Bttr Model</h3>
          <p className="dark:text-polar-300 text-gray-500">
            Bttr takes responsibility for the systems we build. We do not hand off and disappear.
            Our lifecycle ownership model means we stay invested in your success through
            design responsibility, engineering accountability, and operational continuity.
          </p>
        </div>
        <div className="dark:border-polar-700 dark:divide-polar-700 divide-y divide-gray-200 border-y border-gray-200">
          <div className="py-3">
            <h4 className="font-medium">Design responsibility</h4>
            <p className="dark:text-polar-300 text-gray-500">
              We own the design decisions and their long-term implications.
            </p>
          </div>
          <div className="py-3">
            <h4 className="font-medium">Engineering accountability</h4>
            <p className="dark:text-polar-300 text-gray-500">
              We stand behind the code and architecture we deliver.
            </p>
          </div>
          <div className="py-3">
            <h4 className="font-medium">Operational continuity</h4>
            <p className="dark:text-polar-300 text-gray-500">
              We ensure systems continue to perform and evolve over time.
            </p>
          </div>
        </div>
      </ResourceSection>

      <ResourceSection id="why-bttr" title="Why Choose Bttr?">
        <div className="flex flex-col gap-2">
          <p className="dark:text-polar-300 text-gray-500">
            If you need more than deliverables—if you need systems that endure—Bttr
            offers a fundamentally different approach to digital product development.
          </p>
        </div>
        <ul className="dark:border-polar-700 dark:divide-polar-700 divide-y divide-gray-200 border-y border-gray-200 [&>li]:py-3">
          <li>
            <h4 className="font-medium">Built for real constraints</h4>
            <p className="dark:text-polar-300 text-gray-500">
              We design for regulatory, security, and operational realities.
            </p>
          </li>
          <li>
            <h4 className="font-medium">Designed for longevity</h4>
            <p className="dark:text-polar-300 text-gray-500">
              Our systems are built to endure, not to be replaced.
            </p>
          </li>
          <li>
            <h4 className="font-medium">Ownership over handoff</h4>
            <p className="dark:text-polar-300 text-gray-500">
              We take long-term responsibility for what we build.
            </p>
          </li>
          <li>
            <h4 className="font-medium">Senior execution</h4>
            <p className="dark:text-polar-300 text-gray-500">
              A small team of experienced practitioners, not a pyramid of juniors.
            </p>
          </li>
        </ul>
      </ResourceSection>

      <div className="dark:border-polar-700 flex flex-col border-t border-gray-200 pt-16">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl">Ready to build something that lasts?</h3>
            <p className="dark:text-polar-300 text-center text-gray-700 md:w-[440px]">
              Start a conversation about how Bttr can help design and engineer
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
