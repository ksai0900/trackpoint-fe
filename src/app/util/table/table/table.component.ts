import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PagResponseMeta } from 'src/app/models/pag-response-meta';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() meta: PagResponseMeta = {
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 0,
    totalPages: 0
  }
  @Input() headers: {
    key: string,
    displayName: string
    filterType: 'none' | 'text' | 'numbers' | 'dates' | 'dropdown';
    filterOptions?: string[];
  }[] = [];
  @Output() pageChanged = new EventEmitter<number>();
  @Output() filtersUpdated = new EventEmitter<{ [key: string]: string }>();


  sortDirection: { [key: string]: 'asc' | 'desc' } = {};


  filter: { [key: string]: string } = {};

  filteredData: any[] = [];
  originalData: any[] = this.data;
  currentPageData: any[] = [];
  totalPages = 0;   // total available pages
  currentPage = 1;  // current page
  itemsPerPage = 5; // items per page
  totalItems = 0;   // total found items
  sortedAscendingText = false;
  sortedAscendingNumber = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if ('data' in changes && changes['data'].currentValue) {
      this.originalData = [...changes['data'].currentValue];
      this.filteredData = [...changes['data'].currentValue];
    }
    if ('meta' in changes && changes['meta'].currentValue) {
      this.totalItems = changes['meta'].currentValue.totalItems;
      this.totalPages = changes['meta'].currentValue.totalPages;
      this.updateCurrentPageData();
    }
  }


  ngOnInit(): void {
    console.log("table component ", this.data);
    console.log("meta component ", this.meta);
    this.originalData = [...this.data];

    this.initSortOrderIcons();
    this.initFilterHeader();
    this.updateCurrentPageData();

    console.log("Original Data:", this.originalData);
    console.log("Filtered Data:", this.filteredData);
    console.log("Current Page Data:", this.currentPageData);

  }


  isDate(value: any): boolean {
    // This is a simple regex to match the ISO date format. It won't account for all invalid dates, but it will match the format.
    const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
    return datePattern.test(value);
  }

  private initSortOrderIcons() {
    console.log("Init sort order icons");
    console.log("Headers:", this.headers);
    this.headers.forEach(header => {
      if (!this.sortDirection[header.key]) {
        this.sortDirection[header.key] = 'asc';
      }
    });
  }

  isBoolean(value: any): boolean {
    return typeof value === 'boolean';
  }
  
  private initFilterHeader() {
    for (let header of this.headers) {
      this.filter[header.key] = '';
    }
  }

  applyFilter() {
    console.log("Filter emitted:", this.filter);
    this.filtersUpdated.emit(this.filter);

  }


  sortData(key: string) {
    const order = this.sortDirection[key] === 'asc' ? 'desc' : 'asc';
    this.sortDirection[key] = order;
    // This will also send the sort order and sort field to the parent component
    this.filtersUpdated.emit({ ...this.filter, sortField: key, sortDirection: order });
}


  prevPage() {
    if (this.meta.currentPage > 0) {
      this.pageChanged.emit(this.meta.currentPage - 1);
    }
  }

  nextPage() {
    if (this.meta.currentPage < this.meta.totalPages) {
      this.pageChanged.emit(this.meta.currentPage + 1);
    }
    console.log("Next Page Clicked", this.meta.currentPage);

  }

  updateCurrentPageData() {
    console.log('Updating current page data...');
    console.log('Current Page:', this.meta.currentPage);
    console.log('Items Per Page:', this.meta.itemsPerPage);
    console.log('Filtered Data:', this.filteredData);

    // Since the backend handles pagination, the filteredData is essentially the currentPageData.
    this.currentPageData = this.filteredData;

    console.log('Current Page Data:', this.currentPageData);
  }
}
