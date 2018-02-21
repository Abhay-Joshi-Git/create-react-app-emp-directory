import filter from 'lodash/filter';

const employees = [
  {
    id: 12323,
    name: 'Dan',
    deptId: 1,
    address: '13, North Street, LA',
    mobile: '443553535',
  },
  {
    id: 13534,
    name: 'Cody',
    deptId: 1,
    address: '16, Park Avenue, LA',
    mobile: '483545315',
  },
  {
    id: 43452,
    name: 'Jin',
    deptId: 2,
    address: '33, Main Road, LA',
    mobile: '418564535',
  },
  {
    id: 52343,
    name: 'Peter',
    deptId: 3,
    address: '22, Mountain Villa, LA',
    mobile: '450903535',
  },
];
const getEmployees = () => new Promise((resolve) => {
  resolve(employees);
});
const getEmployeeByDeptId = deptId => new Promise((resolve) => {
  /* eslint-disable no-console */
  console.log('in getEmployeeByDeptId', deptId, filter);
  resolve(filter(employees, item => item.deptId === deptId));
});

export { getEmployees, getEmployeeByDeptId };
