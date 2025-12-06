--  Artifact:   02_StoredProcedures.sql
--  Version:    1.0
--  Date:       2024-10-20 19:59:00
--  Author:     Miguel Angel Gil Rios
--  Email:      angel.grios@gmail.com / mgil@utleon.edu.mx
--  Comments:   1.  Se agrego el stored procedure para insertar un
--                  alimento.
--              2.  Se agrego el stored procedure [actualizarAlimento].
--  --------------------------------------------------------------------------

USE zarape;

DROP PROCEDURE IF EXISTS insertarAlimento;
DELIMITER $$
CREATE PROCEDURE insertarAlimento(	/* Datos del Producto */
                                    IN	var_nombre          VARCHAR(64),    --  1
                                    IN	var_descripcion     VARCHAR(64),    --  2
                                    IN	var_foto            LONGTEXT,       --  3
                                    IN  var_precio          DECIMAL(2),     --  4
                                    
                                    /* F.K. de la Caregoria */
                                    IN	var_idCategoria     INT,            --  5                                    
                                    
                                    /* Valores de Retorno */
                                    OUT	var_idProducto      INT,            --  6
                                    OUT	var_idAlimento      INT             --  7
				)                                    
    BEGIN        
        -- Comenzamos insertando los datos del Producto:
        INSERT INTO producto (nombre, descripcion, foto, precio, idCategoria, activo)
                    VALUES( var_nombre, var_descripcion, var_foto, 
                            var_precio, var_idCategoria, 1);
        -- Obtenemos el ID del Producto que se genero:
        SET var_idProducto = LAST_INSERT_ID();

        -- Finalmente, insertamos en la tabla Alimento:
        INSERT INTO alimento (idProducto)
                    VALUES(var_idProducto);

        -- Obtenemos el ID del Alimento que se genero:
        SET var_idAlimento = LAST_INSERT_ID();
    END
$$
DELIMITER ;


DROP PROCEDURE IF EXISTS actualizarAlimento;
DELIMITER $$
CREATE PROCEDURE actualizarAlimento(/* Datos del Producto */
                                    IN	var_nombre          VARCHAR(64),    --  1
                                    IN	var_descripcion     VARCHAR(64),    --  2
                                    IN	var_foto            LONGTEXT,       --  3
                                    IN  var_precio          DECIMAL(2),     --  4
                                    
                                    /* F.K.'s de la Categoria y Producto */
                                    IN	var_idCategoria     INT,            --  5                                                                                                            
                                    IN 	var_idProducto      INT             --  6
				)                                    
    BEGIN        
        -- Actualizamos los datos del Producto solamente, pues no hay relaciones
        -- con otras tablas en donde deban actualizarse campos:
        UPDATE producto SET nombre=var_nombre, descripcion=var_descripcion, foto=var_foto, 
                            precio=var_precio, idCategoria=var_idCategoria
        WHERE idProducto=var_idProducto;                
    END
$$
DELIMITER ;