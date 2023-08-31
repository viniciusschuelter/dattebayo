import { Component } from '@angular/core';
import { DocsCollectionsMock } from '../../mocks/docs.mock';

@Component({
  templateUrl: 'docs.component.html',
})
export class DocsComponent {
  docsCollectionsMock = DocsCollectionsMock;
  pathAPI = '${baseUrl}/${collectionName}';
  pathAPIIds = '${baseUrl}/${collectionName}/${ids}';
}
