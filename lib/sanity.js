import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: "bbnhiet4",
  dataset: 'production',
  apiVersion: 'v1',
  token: "sksGbu1TiZvYOpXH5d2i01PYQ25XVjye4oYhi3ncMyr934sYjqBnGaHRYPTcaQcpp45vvBHTQrPHdcsiH8GXLEkNvfrAI22MaYqszWXbNMaMdARI1nkr6m6x9g75qyUFAf2YNF13EwuqTBTRA5mU0mCR0LIxbUzBA4LRh2QxyfH8AF75DQG3",
  useCdn: false,
})