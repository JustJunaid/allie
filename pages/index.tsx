import { Layout } from '@components/common'
import { Container, Grid } from '@components/ui'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <div>
        <Grid layout="normal">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((key) => (
            <Link href="#" key={key}>
              <a>
                <div className="relative overflow-hidden box-border">
                  <Image
                    quality="85"
                    src={`/${key}.jpeg`}
                    alt="Image"
                    height={320}
                    width={320}
                    layout="fixed"
                  />
                </div>
              </a>
            </Link>
          ))}
        </Grid>
      </div>
    </Container>
  )
}

Home.Layout = Layout
