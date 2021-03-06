/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, AfterViewInit } from '@angular/core';
/**
 * Directive to automatically resize a textarea to fit its content.
 */
export declare class MdTextareaAutosize implements AfterViewInit {
    private _elementRef;
    private _minRows;
    private _maxRows;
    minRows: number;
    maxRows: number;
    _matAutosizeMinRows: number;
    _matAutosizeMaxRows: number;
    /** Cached height of a textarea with a single row. */
    private _cachedLineHeight;
    constructor(_elementRef: ElementRef);
    /** Sets the minimum height of the textarea as determined by minRows. */
    _setMinHeight(): void;
    /** Sets the maximum height of the textarea as determined by maxRows. */
    _setMaxHeight(): void;
    ngAfterViewInit(): void;
    /** Sets a style property on the textarea element. */
    private _setTextareaStyle(property, value);
    /**
     * Cache the height of a single-row textarea.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    private _cacheTextareaLineHeight();
    /** Resize the textarea to fit its content. */
    resizeToFitContent(): void;
}
