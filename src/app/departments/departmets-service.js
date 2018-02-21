import find from 'lodash/find';

const departments = [
  {
    id: 1,
    name: 'development',
  },
  {
    id: 2,
    name: 'accounts',
  },
  {
    id: 3,
    name: 'sales',
  },
];
const deptPromise = new Promise((resolve) => {
  resolve(departments);
});
const getDepartments = () => deptPromise;
const getDepartment = id => new Promise((resolve) => {
  const dept = find(departments, item => item.id === id);
  resolve(dept);
});

// const service = {
//   getDepartments,
//   getDepartment,
// };

// export default service;
export { getDepartments, getDepartment };
