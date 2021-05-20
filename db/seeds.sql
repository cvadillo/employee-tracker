INSERT INTO departments (name) VALUES 
    ('Driver'),
    ('Mechanic'),
    ('Manager');
    
INSERT INTO roles (title, salary, department_id) VALUES
    ('1st Driver', 1500000.00, 1),
    ('2nd Driver', 750000.00, 1),
    ('Mechanic 1', 85000.00, 2),
    ('Mechanic 2', 100000.00, 2),
    ('Team Coach', 2000000.00, 3),
    ('Head Coach', 3000000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ('James', 'May', 1, NULL),
    ('Richard', 'Hammond', 4, NULL),
    ('Jeremy', 'Clarkson', 3, 1),   
    ('Roger', 'Moore', 2, 2),
    ('Pierce', 'Brosnan', 1, NULL),
    ('Sean', 'Connery', 6, NULL),
    ('Sergio', 'Perez', 5, 1),   
    ('David', 'Ricciardo', 2, 2),
    ('Carlos', 'Saenz', 1, NULL),
    ('Lando', 'Norris', 3, NULL),
    ('Sebastian', 'Vettel', 3, 1),   
    ('Michael', 'Schumacher', 1, 2),
    ('Ayrton', 'Senna', 1, NULL),
    ('Lewis', 'Hamilton', 2, NULL),
    ('Valteri', 'Bottas', 2, 1),   
    ('Fernando', 'Alonso', 6, 2); 