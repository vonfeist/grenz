import {Component, OnInit} from '@angular/core';
import {JsonReaderService} from '../../services/json-reader.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery-tab',
  templateUrl: './gallery-tab.component.html',
  styleUrls: ['./gallery-tab.component.scss']
})
export class GalleryTabComponent implements OnInit {

  public galleryTabs;

  constructor(
    private jsonService: JsonReaderService,
  ) { }


  ngOnInit() {
    this.jsonService.getGallery().subscribe(data  => {
      this.galleryTabs = data;
    });
  }
}
