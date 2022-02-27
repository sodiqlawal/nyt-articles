import { render} from "@testing-library/react";
import Layout from 'components/Layout'

describe('The <Layout /> component', () => {
  it('should render all children passed to it', () => {
    const { getByTestId } = render(
      <Layout>
        <p data-testid='TestParagraph'></p>
      </Layout>
    )

    expect(getByTestId('TestParagraph')).toBeInTheDocument()
  })
})