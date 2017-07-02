import React, { Component } from 'react';
import Page from '../pages/Page';
//import TestContainer from '../containers/Test';

class Test extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Test | reactGo';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'A reactGo example of life' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    console.log('this is Test component!!!!');
    console.log('this.props=',this.props);
    return (
      <Page {...this.getMetaData()}>
        This is Test put the container here
      </Page>
    );
  }
}

export default Test;
