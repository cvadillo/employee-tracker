module.exports = {
    //  employee name, role title, salary, department and managers
    viewAllEmployees: `SELECT employees.first_name, employees.last_name, roles.title AS role, roles.salary, departments.name AS department, concat(manager.first_name, ' ', manager.last_name) AS manager_name
    FROM employees
    LEFT JOIN employees manager ON (employees.manager_id = manager.id)
    LEFT JOIN roles ON (employees.role_id = roles.id)
    LEFT JOIN departments ON (roles.department_id = departments.id)`,

    viewAllDepts: `SELECT * FROM departments`,
    viewAllRoles: `SELECT roles.id, roles.title, roles.salary, departments.name AS department
    FROM roles
    LEFT JOIN departments ON (roles.department_id =departments.id)`,
    getEmployeeId: `SELECT id FROM employees WHERE first_name = ? AND last_name = ?`,
    getRoleId: `SELECT id FROM roles WHERE title = ?`,
    getDepartmentId: `SELECT id FROM departments WHERE name = ?`,
    getManagers: `SELECT concat(employees.first_name, ' ', employees.last_name) AS manager
    FROM employees
    LEFT JOIN employees manager
    ON (employees.manager_id = manager.id)`,
    getManagerTeam: `SELECT concat(employees.first_name, ' ', employees.last_name) AS team FROM employees WHERE manager_id = ?`,
    updateRoleId: `UPDATE employees SET role_id = ? WHERE id = ?`,
    updateManagerId: `UPDATE employees SET manager_id = ? WHERE id = ?`
}