// 动态引入问题
import * as React from 'react'
const Sus = React.lazy(() => import('./common/Sus'))
class DynamicImport extends React.Component<{}, {}> {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Sus></Sus>
        </React.Suspense>
      </div>
    )
  }
}

export default DynamicImport