import { Component, OnInit } from '@angular/core';
import { Pastebin } from '../pastebin';
import { PastebinService } from '../pastebin.service';

@Component({
  selector: 'app-pastebin',
  templateUrl: './pastebin.component.html',
  styleUrls: ['./pastebin.component.scss'],
})
export class PastebinComponent implements OnInit {
  title: string = 'Pastebin Application';
  pastebin: Pastebin[] = [];

  constructor(public pastebinService: PastebinService) {}

  ngOnInit() {
    this.loadPastebin();
  }

  public loadPastebin() {
    this.pastebinService
      .getPastebin()
      .subscribe(pastebin => this.pastebin = pastebin);
  }

  public onAddPaste(newPaste: Pastebin) {
    this.pastebin = this.pastebin.concat(newPaste);
  }

  public onUpdatePaste(newPaste: Pastebin) {
    this.pastebin.map(paste => {
      if (paste.id == newPaste.id) {
        paste = newPaste;
      }
    });
  }

  public onDeletePaste(p: Pastebin) {
    this.pastebin = this.pastebin.filter(paste => paste !== p);
  }
}
