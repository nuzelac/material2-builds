/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectorRef, ElementRef, IterableDiffers, QueryList, Renderer2, ViewContainerRef } from '@angular/core';
import { CollectionViewer, DataSource } from './data-source';
import { CdkHeaderRowDef, CdkRowDef } from './row';
import { CdkColumnDef } from './cell';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/combineLatest';
/**
 * Provides a handle for the table to grab the view container's ng-container to insert data rows.
 * @docs-private
 */
export declare class RowPlaceholder {
    viewContainer: ViewContainerRef;
    constructor(viewContainer: ViewContainerRef);
}
/**
 * Provides a handle for the table to grab the view container's ng-container to insert the header.
 * @docs-private
 */
export declare class HeaderRowPlaceholder {
    viewContainer: ViewContainerRef;
    constructor(viewContainer: ViewContainerRef);
}
/**
 * A data table that connects with a data source to retrieve data of type T and renders
 * a header row and data rows. Updates the rows when new data is provided by the data source.
 */
export declare class CdkTable<T> implements CollectionViewer {
    private readonly _differs;
    private readonly _changeDetectorRef;
    /** Subject that emits when the component has been destroyed. */
    private _onDestroy;
    /** Flag set to true after the component has been initialized. */
    private _isViewInitialized;
    /** Latest data provided by the data source through the connect interface. */
    private _data;
    /** Subscription that listens for the data provided by the data source. */
    private _renderChangeSubscription;
    /**
     * Map of all the user's defined columns identified by name.
     * Contains the header and data-cell templates.
     */
    private _columnDefinitionsByName;
    /** Differ used to find the changes in the data provided by the data source. */
    private _dataDiffer;
    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     */
    viewChange: BehaviorSubject<{
        start: number;
        end: number;
    }>;
    /**
     * Provides a stream containing the latest data array to render. Influenced by the table's
     * stream of view window (what rows are currently on screen).
     */
    dataSource: DataSource<T>;
    private _dataSource;
    _rowPlaceholder: RowPlaceholder;
    _headerRowPlaceholder: HeaderRowPlaceholder;
    /**
     * The column definitions provided by the user that contain what the header and cells should
     * render for each column.
     */
    _columnDefinitions: QueryList<CdkColumnDef>;
    /** Template used as the header container. */
    _headerDefinition: CdkHeaderRowDef;
    /** Set of templates that used as the data row containers. */
    _rowDefinitions: QueryList<CdkRowDef>;
    constructor(_differs: IterableDiffers, _changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, role: string);
    ngOnDestroy(): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current
     * render change subscription if one exists. If the data source is null, interpret this by
     * clearing the row placeholder. Otherwise start listening for new data.
     */
    private _switchDataSource(dataSource);
    /** Set up a subscription for the data provided by the data source. */
    private _observeRenderChanges();
    /**
     * Create the embedded view for the header template and place it in the header row view container.
     */
    private _renderHeaderRow();
    /** Check for changes made in the data and render each change (row added/removed/moved). */
    private _renderRowChanges();
    /**
     * Create the embedded view for the data row template and place it in the correct index location
     * within the data row view container.
     */
    private _insertRow(rowData, index);
    /**
     * Returns the cell template definitions to insert into the header
     * as defined by its list of columns to display.
     */
    private _getHeaderCellTemplatesForRow(headerDef);
    /**
     * Returns the cell template definitions to insert in the provided row
     * as defined by its list of columns to display.
     */
    private _getCellTemplatesForRow(rowDef);
}
