import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pastebin } from '../pastebin';
import { PastebinService } from '../pastebin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateModelComponent } from '../model/create/create.component';

@Component({
  selector: 'app-add-paste',
  templateUrl: './add-paste.component.html',
  styleUrls: ['./add-paste.component.scss']
})
export class AddPasteComponent implements OnInit {
  @Output() addPasteSuccess: EventEmitter<Pastebin> = new EventEmitter<Pastebin>();
  constructor(private pastebinService: PastebinService, private modalService: NgbModal) { }

  ngOnInit() {  }

  createPaste() {
    const modalRef = this.modalService.open(CreateModelComponent);
    modalRef.result.then(result => this.onSave(result));
  }

  public onSave(result): void {
    this.pastebinService.addPaste(result).subscribe(response => {
        this.addPasteSuccess.emit(response);
    });
  }
}
