import ArrowOutward from '@mui/icons-material/ArrowOutward'
import Button from '@polar-sh/ui/components/atoms/Button'
import Link from 'next/link'
import { SplitPromo } from './molecules/SplitPromo'

export const MerchantOfRecord = () => {
  return (
    <SplitPromo
      title="Lifecycle Ownership"
      description="Bttr. takes responsibility for the systems we build. We do not hand off and disappear."
      bullets={[
        'Design responsibility',
        'Engineering accountability',
        'Operational continuity',
      ]}
      image="/assets/landing/transactions.jpg"
      cta1={
        <Link href="/contact">
          <Button variant="secondary" className="rounded-full">
            Talk to Us
            <span className="ml-2">
              <ArrowOutward fontSize="inherit" />
            </span>
          </Button>
        </Link>
      }
    />
  )
}
