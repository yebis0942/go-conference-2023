import { Box, Typography } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import { Layout } from 'src/components/commons'
import { StaffCardList } from 'src/components/organisms/StaffCardList'
import { staff } from 'src/modules/staff'
import { Colors } from 'src/styles/color'

export const Page: NextPage = () => {
  return (
    <Layout>
      <Box sx={{ backgroundColor: Colors.background.secondary }}>
        <Typography variant="h2" sx={{ paddingTop: { xs: '64px', sm: '128px' }, textAlign: 'center' }}>
          Staff
        </Typography>
        <StaffCardList staff={staff} />
      </Box>
    </Layout>
  )
}

// NOTE: next exportで静的ファイルとして生成するため空のpropsを宣言する
export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default Page
