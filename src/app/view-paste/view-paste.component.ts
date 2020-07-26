import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pastebin, Languages } from '../pastebin';
import { PastebinService } from '../pastebin.service';

@Component({
  selector: 'app-view-paste',
  templateUrl: './view-paste.component.html',
  styleUrls: ['./view-paste.component.scss'],
})
export class ViewPasteComponent implements OnInit {
  @Input() paste: Pastebin;
  @Output() updatePasteSuccess: EventEmitter<Pastebin> = new EventEmitter<Pastebin>();
  @Output() deletePasteSuccess: EventEmitter<Pastebin> = new EventEmitter<Pastebin>();

  showPasteModal: boolean;
  editEnabled: boolean;
  readonly languages = Languages;

  constructor(private pastebinService: PastebinService) {}

  ngOnInit() {
    this.showPasteModal = false;
    this.editEnabled = false;
  }

  public showPaste() {
    this.showPasteModal = true;
  }

  public onEdit() {
    this.editEnabled = true;
  }

  public onSave() {
    this.pastebinService.updatePaste(this.paste).subscribe(() => {
      this.editEnabled = false;
      this.updatePasteSuccess.emit(this.paste);
    });
  }

  public onClose() {
    this.showPasteModal = false;
  }

  public onDelete() {
    this.pastebinService.deletePaste(this.paste).subscribe(() => {
      this.deletePasteSuccess.emit(this.paste);
      this.onClose();
    });
  }
}
