INSERT INTO departments (name) 
VALUES 
    ('Legal'),
    ('Engineering'),
    ('Sales');

INSERT INTO roles (title, salary, department_id) seeds.sql
VALUES
    ('Lawyer', 100000.00, 1),
    ('Paralegal', 50000.00, 1),
    ('Software Engineer', 100000.00, 2),
    ('Salesperson', 80000.00, 3),
    ('Sales Lead', 120000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Doe', 2, 1),
    ('Fred', 'Smith', 3, 2),
    ('Sally', 'Smith', 4, NULL),
    ('Bob', 'Smith', 5, 4);