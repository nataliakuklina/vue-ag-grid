export default [
  {
    headerName: 'Сотрудник',
    field: 'employee',
    rowSelection: true,
    checkboxSelection: true
  },
  {
    headerName: 'Должность',
    field: 'position',
    rowSelection: true
  },
  {
    headerName: 'Менеджер',
    field: 'manager'
  },
    {
    headerName: 'Город',
    field: 'city'
  },
  {
    headerName: 'Актуальная ЗП',
    field: 'salary',
    cellRendererFramework: 'SalaryShowRow',
  },
  {
    headerName: /&#10003;/,
    field: 'discuss',
    editable: true,
    cellRendererFramework: 'CommentShowRow',
    cellEditorFramework: 'CommentEditRow',
    width: 90,
  },
  {
    headerName: 'Пересмотр ЗП',
    field: 'new_salary',
    cellRendererFramework: 'SalaryShowRow',
    cellEditorFramework: 'SalaryEditRow',
    width: 230,
    editable: true,
  },
  {
    headerName: 'Дельта',
    field: 'delta',
    width: 100,
    cellRendererFramework: 'DeltaShowRow',
  },
  {
    headerName: 'Комментарий',
    field: 'comment',
    editable: true,
    minWidth: 300,
  },
  {
    headerName: 'Теги',
    field: 'tags',
    cellEditorFramework: 'TagsEditRow',
    cellRendererFramework: 'TagsRow',
    editable: true,
  },
];
