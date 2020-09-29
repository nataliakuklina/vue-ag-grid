<template>
  <ag-grid-vue style="height: calc(100vh - 60px)"
               class="ag-theme-alpine"
               :columnDefs="columnDefs"
               :rowData="rowData"
               rowSelection="multiple"

               @grid-ready="onGridReady"
               @data-model-changed="dataModelChanged"
               @selection-changed="onSelectionChanged"
               @row-selected="onRowSelected"
  >
  </ag-grid-vue>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";

import SalaryEditRow from './CustomRows/SalaryEditRow';
import SalaryShowRow from './CustomRows/SalaryShowRow';
import TagsRow from './CustomRows/TagsRow';
import TagsEditRow from './CustomRows/TagsEditRow';

import columnDefs from '../constants/columnDefs';
import rowData from '../constants/rowData';

export default {
  name: 'App',
  data() {
    return {
      columnDefs: null,
      rowData: null,

      gridApi: null,
      columnApi: null,
    }
  },
  components: {
    AgGridVue,
    SalaryShowRow,
    SalaryEditRow,
    TagsRow,
    TagsEditRow,
  },
  beforeMount() {
    this.columnDefs = columnDefs;

    this.rowData = rowData;
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.columnApi = params.columnApi;
      console.log('onGridReady', params);
    },
    dataModelChanged(rowData) {
      console.log('dataModelChanged', rowData);
    },
    onSelectionChanged() {
      let selectedRows = this.gridApi.getSelectedRows();
      console.log('selectedRows', selectedRows);
      if (selectedRows.length === 1) {
        this.$emit('open-info', selectedRows[0]);
      } else {
        this.$emit('close-info');
      }
    },
    onRowSelected(event) {
      console.log(' selected = ' + event.node.selected);
    },
  },
}
</script>

<style lang="scss">
  @import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
  @import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
</style>
