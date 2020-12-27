import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
// import Link from "next/link";
import Header from "../components/header";

import factory from "../ethereum/factory";
import Layout from "../components/layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        // decsription: '<a>View Campaign</a>',
        fluid: true,
        meta: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        )
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout style={{backgroundColor: "grey"}}>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                secondary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;

// function Index() {
//   return (
//     <main>
//       <Header />
//       <section>
//         <Link href="/about">
//           <a>Go to About Me</a>
//         </Link>
//       </section>
//     </main>
//   );
// }
//
// export default Index;
