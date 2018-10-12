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
  closeResult: string;
  currentImage: string;

  constructor(
    private jsonService: JsonReaderService,
    private modal: NgbModal
  ) { }

  openModal(content, imageSource) {
    this.currentImage = imageSource;
    this.modal.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }



  ngOnInit() {
    this.jsonService.getGallery().subscribe(data  => {
      this.galleryTabs = data;
    });
  }
}
