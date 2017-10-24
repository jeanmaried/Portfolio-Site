import React, {Component} from 'react';
import DocumentMeta from 'react-document-meta';
 
class Meta extends Component {
  render() {
    const meta = {
      title: 'Some Meta Title',
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react, javascript, joseph, dalmasso, jodalmasso'
        }
      }
    };

    return (
        <head>
          <DocumentMeta {...meta} />
        </head>
        );
  }
}

export default Meta;