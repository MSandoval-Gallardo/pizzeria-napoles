// Imágenes predefinidas (Data URLs pequeñas para ejemplos)
        const defaultImages = [
            { id: 1, name: "Pizza Margarita", url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhkZDdiIi8+CiAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSI4MCIgZmlsbD0iI2ZmYzEwMCIvPgogIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiNlNzQwMzUiLz4KICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMDAiIHI9IjQwIiBmaWxsPSIjZmZmMmNjIi8+CiAgPHRleHQgeD0iMTUwIiB5PSIxMTAiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TWFyZ2FyaXRhPC90ZXh0Pgo8L3N2Zz4=" },
            { id: 2, name: "Pizza Pepperoni", url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhkZDdiIi8+CiAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSI4MCIgZmlsbD0iI2ZmYzEwMCIvPgogIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiNlNzQwMzUiLz4KICA8Y2lyY2xlIGN4PSIxNTAiIGN5PSIxMDAiIHI9IjQwIiBmaWxsPSIjZmZmMmNjIi8+CiAgPGNpcmNsZSBjeD0iMTIwIiBjeT0iODAiIHI9IjEwIiBmaWxsPSIjYzAzOTJiIi8+CiAgPGNpcmNsZSBjeD0iMTgwIiBjeT0iODAiIHI9IjEwIiBmaWxsPSIjYzAzOTJiIi8+CiAgPGNpcmNsZSBjeD0iMTIwIiBjeT0iMTIwIiByPSIxMCIgZmlsbD0iI2MwMzkyYiIvPgogIDxjaXJjbGUgY3g9IjE4MCIgY3k9IjEyMCIgcj0iMTAiIGZpbGw9IiNjMDM5MmIiLz4KICA8dGV4dCB4PSIxNTAiIHk9IjExMCIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QZXBwZXJvbmk8L3RleHQ+Cjwvc3ZnPg==" },
            { id: 3, name: "Pizza 4 Quesos", url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhkZDdiIi8+CiAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSI4MCIgZmlsbD0iI2ZmYzEwMCIvPgogIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiNmZmYyY2MiLz4KICA8Y2lyY2xlIGN4PSIxMjAiIGN5PSI4MCIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiLz4KICA8Y2lyY2xlIGN4PSIxODAiIGN5PSI4MCIgcj0iMTIiIGZpbGw9IiNmZmZmZmYiLz4KICA8Y2lyY2xlIGN4PSIxMjAiIGN5PSIxMjAiIHI9IjEyIiBmaWxsPSIjZmZmZmZmIi8+CiAgPGNpcmNsZSBjeD0iMTgwIiBjeT0iMTIwIiByPSIxMiIgZmlsbD0iI2ZmZmZmZiIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTEwIiBmb250LXNpemU9IjI0IiBmb250LWZhbWlseT0iQXJpYWwiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjQgUXVlc29zPC90ZXh0Pgo8L3N2Zz4=" },
            { id: 4, name: "Pizza Vegetariana", url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhkZDdiIi8+CiAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSI4MCIgZmlsbD0iI2ZmYzEwMCIvPgogIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiNlNzQwMzUiLz4KICA8cmVjdCB4PSIxMjAiIHk9IjcwIiB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIGZpbGw9IiMyN2FlNjAiLz4KICA8Y2lyY2xlIGN4PSIxNjAiIGN5PSI4MCIgcj0iOCIgZmlsbD0iIzgwNDAwMCIvPgogIDxyZWN0IHg9IjE3MCIgeT0iMTAwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IiMzMzc3YjciLz4KICA8Y2lyY2xlIGN4PSIxMzAiIGN5PSIxMjAiIHI9IjEwIiBmaWxsPSIjODA0MDAwIi8+CiAgPHRleHQgeD0iMTUwIiB5PSIxMTAiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VmVnZXRhcmlhbmE8L3RleHQ+Cjwvc3ZnPg==" },
            { id: 5, name: "Pizza Hawaiana", url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhkZDdiIi8+CiAgPGNpcmNsZSBjeD0iMTUwIiBjeT0iMTAwIiByPSI4MCIgZmlsbD0iI2ZmYzEwMCIvPgogIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjEwMCIgcj0iNjAiIGZpbGw9IiNlNzQwMzUiLz4KICA8Y2lyY2xlIGN4PSIxMzAiIGN5PSI5MCIgcj0iMTIiIGZpbGw9IiNmZmZmMDAiLz4KICA8Y2lyY2xlIGN4PSIxNzAiIGN5PSI5MCIgcj0iMTIiIGZpbGw9IiNmZmZmMDAiLz4KICA8cmVjdCB4PSIxNDUiIHk9IjExMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjYzAzOTJiIi8+CiAgPHJlY3QgeD0iMTYwIiB5PSIxMjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2MwMzkyYiIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTEwIiBmb250LXNpemU9IjI0IiBmb250LWZhbWlseT0iQXJpYWwiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhhd2FpYW5hPC90ZXh0Pgo8L3N2Zz4=" }
        ];

        // Datos iniciales de pizzas con validación de tipos
        let pizzas = [
            {
                id: 1,
                name: "Margarita",
                ingredients: "Salsa de tomate, Mozzarella fresca, Albahaca fresca, Aceite de oliva",
                price: 10.99,
                image: defaultImages[0].url,
                available: true
            },
            {
                id: 2,
                name: "Pepperoni",
                ingredients: "Salsa de tomate, Mozzarella, Pepperoni, Orégano",
                price: 12.99,
                image: defaultImages[1].url,
                available: true
            },
            {
                id: 3,
                name: "Cuatro Quesos",
                ingredients: "Mozzarella, Gorgonzola, Parmesano, Queso de cabra, Salsa de tomate",
                price: 14.50,
                image: defaultImages[2].url,
                available: false
            },
            {
                id: 4,
                name: "Vegetariana",
                ingredients: "Salsa de tomate, Mozzarella, Pimientos, Champiñones, Cebolla, Aceitunas",
                price: 13.75,
                image: defaultImages[3].url,
                available: true
            },
            {
                id: 5,
                name: "Hawaiana",
                ingredients: "Salsa de tomate, Mozzarella, Jamón, Piña",
                price: 13.25,
                image: defaultImages[4].url,
                available: true
            }
        ];

        // Función para asegurar que los datos tengan el formato correcto
        function sanitizePizzaData(pizza) {
            return {
                id: Number(pizza.id) || 0,
                name: String(pizza.name || ''),
                ingredients: String(pizza.ingredients || ''),
                price: Number(pizza.price) || 0,
                image: String(pizza.image || defaultImages[0].url),
                available: Boolean(pizza.available)
            };
        }

        // Función para cargar y sanitizar pizzas desde localStorage
        function loadPizzasFromStorage() {
            try {
                const savedPizzas = localStorage.getItem('pizzas');
                if (savedPizzas) {
                    const parsedPizzas = JSON.parse(savedPizzas);
                    // Asegurarnos de que cada pizza tenga el formato correcto
                    return parsedPizzas.map(pizza => sanitizePizzaData(pizza));
                }
            } catch (error) {
                console.error('Error al cargar pizzas desde localStorage:', error);
                showMessage('Error al cargar los datos guardados. Se usarán los datos predeterminados.', 'error');
            }
            return null;
        }

        // Cargar pizzas del localStorage si existen
        document.addEventListener('DOMContentLoaded', function() {
            const loadedPizzas = loadPizzasFromStorage();
            if (loadedPizzas && loadedPizzas.length > 0) {
                pizzas = loadedPizzas;
            }
            
            initApp();
        });

        // Inicializar la aplicación
        function initApp() {
            // Configurar pestañas
            setupTabs();
            
            // Configurar opciones de imágenes
            setupImageOptions();
            
            // Cargar menú de pizzas
            renderPizzaMenu();
            
            // Cargar lista de administración
            renderAdminList();
            
            // Configurar formulario
            setupForm();
        }

        // Configurar funcionalidad de pestañas
        function setupTabs() {
            const tabs = document.querySelectorAll('.tab');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-tab');
                    
                    // Actualizar pestañas activas
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Mostrar contenido correspondiente
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    document.getElementById(targetTab).classList.add('active');
                });
            });
        }

        // Configurar opciones de imágenes predefinidas
        function setupImageOptions() {
            const imageOptionsContainer = document.getElementById('image-options');
            imageOptionsContainer.innerHTML = '';
            
            defaultImages.forEach((image, index) => {
                const imageOption = document.createElement('div');
                imageOption.className = 'image-option';
                imageOption.style.backgroundImage = `url('${image.url}')`;
                imageOption.title = image.name;
                imageOption.setAttribute('data-url', image.url);
                
                imageOption.addEventListener('click', function() {
                    // Remover selección anterior
                    document.querySelectorAll('.image-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    // Seleccionar esta imagen
                    this.classList.add('selected');
                    document.getElementById('pizza-image').value = image.url;
                });
                
                imageOptionsContainer.appendChild(imageOption);
            });
        }

        // Renderizar el menú de pizzas
        function renderPizzaMenu() {
            const pizzaMenu = document.getElementById('pizza-menu');
            pizzaMenu.innerHTML = '';
            
            if (pizzas.length === 0) {
                pizzaMenu.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No hay pizzas en el menú. Agrega algunas desde el panel de administración.</p>';
                return;
            }
            
            pizzas.forEach(pizza => {
                // Asegurarnos de que la pizza tenga el formato correcto
                const safePizza = sanitizePizzaData(pizza);
                
                const pizzaCard = document.createElement('div');
                pizzaCard.className = `pizza-card ${!safePizza.available ? 'out-of-stock' : ''}`;
                
                // Usar imagen de pizza o imagen por defecto
                const imageUrl = safePizza.image || defaultImages[0].url;
                
                // Asegurarnos de que el precio sea un número válido
                const price = typeof safePizza.price === 'number' && !isNaN(safePizza.price) 
                    ? safePizza.price.toFixed(0) 
                    : '0.00';
                
                pizzaCard.innerHTML = `
                    ${!safePizza.available ? '<div class="out-of-stock-badge">AGOTADO</div>' : ''}
                    <div class="pizza-image" style="background-image: url('${imageUrl}');">
                        ${!safePizza.image ? '<i class="fas fa-pizza-slice"></i>' : ''}
                    </div>
                    <div class="pizza-info">
                        <h3>${safePizza.name}</h3>
                        <p class="pizza-ingredients">${safePizza.ingredients}</p>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span class="pizza-price">$${price}</span>
                            <span class="pizza-status ${safePizza.available ? 'status-available' : 'status-out-of-stock'}">
                                ${safePizza.available ? 'Disponible' : 'Agotado'}
                            </span>
                        </div>
                    </div>
                `;
                
                pizzaMenu.appendChild(pizzaCard);
            });
        }

        // Renderizar la lista de administración
        function renderAdminList() {
            const adminList = document.getElementById('pizza-admin-list');
            adminList.innerHTML = '';
            
            if (pizzas.length === 0) {
                adminList.innerHTML = '<div class="pizza-item" style="text-align: center; padding: 2rem;">No hay pizzas para mostrar. Agrega una nueva pizza usando el formulario superior.</div>';
                return;
            }
            
            pizzas.forEach(pizza => {
                // Asegurarnos de que la pizza tenga el formato correcto
                const safePizza = sanitizePizzaData(pizza);
                
                const pizzaItem = document.createElement('div');
                pizzaItem.className = 'pizza-item';
                pizzaItem.setAttribute('data-id', safePizza.id);
                
                // Asegurarnos de que el precio sea un número válido
                const price = typeof safePizza.price === 'number' && !isNaN(safePizza.price) 
                    ? safePizza.price.toFixed(0) 
                    : '0.00';
                
                pizzaItem.innerHTML = `
                    <div><strong>${safePizza.name}</strong></div>
                    <div>${safePizza.ingredients}</div>
                    <div>$${price}</div>
                    <div class="pizza-actions">
                        <button class="btn btn-secondary edit-btn" data-id="${safePizza.id}">Editar</button>
                        <button class="status-toggle ${safePizza.available ? 'status-available-btn' : 'status-out-of-stock-btn'}" data-id="${safePizza.id}">
                            ${safePizza.available ? 'Disponible' : 'Agotado'}
                        </button>
                        <button class="btn btn-danger delete-btn" data-id="${safePizza.id}">Eliminar</button>
                    </div>
                `;
                
                adminList.appendChild(pizzaItem);
            });
            
            // Añadir eventos a los botones
            document.querySelectorAll('.edit-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const pizzaId = parseInt(this.getAttribute('data-id'));
                    editPizza(pizzaId);
                });
            });
            
            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const pizzaId = parseInt(this.getAttribute('data-id'));
                    deletePizza(pizzaId);
                });
            });
            
            document.querySelectorAll('.status-toggle').forEach(btn => {
                btn.addEventListener('click', function() {
                    const pizzaId = parseInt(this.getAttribute('data-id'));
                    togglePizzaStatus(pizzaId);
                });
            });
        }

        // Configurar el formulario
        function setupForm() {
            const form = document.getElementById('pizza-form');
            const cancelBtn = document.getElementById('cancel-edit');
            const resetBtn = document.getElementById('reset-form');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                savePizza();
            });
            
            cancelBtn.addEventListener('click', function() {
                resetForm();
            });
            
            resetBtn.addEventListener('click', function() {
                resetForm();
            });
        }

        // Guardar pizza (crear o actualizar)
        function savePizza() {
            const idInput = document.getElementById('pizza-id');
            const nameInput = document.getElementById('pizza-name');
            const ingredientsInput = document.getElementById('pizza-ingredients');
            const priceInput = document.getElementById('pizza-price');
            const imageInput = document.getElementById('pizza-image');
            
            const pizzaData = {
                name: nameInput.value.trim(),
                ingredients: ingredientsInput.value.trim(),
                price: parseFloat(priceInput.value) || 0,
                image: imageInput.value.trim() || defaultImages[0].url,
                available: true
            };
            
            // Validación básica
            if (!pizzaData.name || !pizzaData.ingredients) {
                showMessage('Por favor, complete todos los campos requeridos correctamente.', 'error');
                return;
            }
            
            const pizzaId = idInput.value ? parseInt(idInput.value) : null;
            
            if (pizzaId) {
                // Editar pizza existente
                const pizzaIndex = pizzas.findIndex(p => p.id === pizzaId);
                if (pizzaIndex !== -1) {
                    // Mantener el estado disponible/agotado
                    pizzaData.available = pizzas[pizzaIndex].available;
                    pizzaData.id = pizzaId;
                    pizzas[pizzaIndex] = sanitizePizzaData(pizzaData);
                    
                    showMessage(`Pizza "${pizzaData.name}" actualizada correctamente.`, 'success');
                }
            } else {
                // Crear nueva pizza
                const newId = pizzas.length > 0 ? Math.max(...pizzas.map(p => p.id)) + 1 : 1;
                pizzaData.id = newId;
                pizzas.push(sanitizePizzaData(pizzaData));
                
                showMessage(`Pizza "${pizzaData.name}" agregada al menú.`, 'success');
            }
            
            // Guardar en localStorage
            try {
                localStorage.setItem('pizzas', JSON.stringify(pizzas));
            } catch (error) {
                console.error('Error al guardar en localStorage:', error);
                showMessage('Error al guardar los datos. Intente nuevamente.', 'error');
            }
            
            // Actualizar vistas
            renderPizzaMenu();
            renderAdminList();
            
            // Restablecer formulario
            resetForm();
        }

        // Editar una pizza
        function editPizza(id) {
            const pizza = pizzas.find(p => p.id === id);
            if (!pizza) return;
            
            // Asegurarnos de que la pizza tenga el formato correcto
            const safePizza = sanitizePizzaData(pizza);
            
            // Cambiar a pestaña de administración
            document.querySelector('[data-tab="admin"]').click();
            
            // Llenar formulario con datos de la pizza
            document.getElementById('pizza-id').value = safePizza.id;
            document.getElementById('pizza-name').value = safePizza.name;
            document.getElementById('pizza-ingredients').value = safePizza.ingredients;
            document.getElementById('pizza-price').value = safePizza.price;
            document.getElementById('pizza-image').value = safePizza.image || defaultImages[0].url;
            
            // Seleccionar la imagen correspondiente en las opciones
            document.querySelectorAll('.image-option').forEach(opt => {
                opt.classList.remove('selected');
                if (opt.getAttribute('data-url') === safePizza.image) {
                    opt.classList.add('selected');
                }
            });
            
            // Cambiar título del formulario y mostrar botón de cancelar
            document.getElementById('form-title').textContent = 'Editar Pizza';
            document.getElementById('submit-btn').textContent = 'Actualizar Pizza';
            document.getElementById('cancel-edit').style.display = 'inline-block';
            
            // Desplazar hacia el formulario
            document.getElementById('pizza-form').scrollIntoView({ behavior: 'smooth' });
        }

        // Eliminar una pizza
        function deletePizza(id) {
            if (!confirm('¿Estás seguro de que quieres eliminar esta pizza? Esta acción no se puede deshacer.')) {
                return;
            }
            
            const pizzaIndex = pizzas.findIndex(p => p.id === id);
            if (pizzaIndex !== -1) {
                const pizzaName = pizzas[pizzaIndex].name;
                pizzas.splice(pizzaIndex, 1);
                
                // Guardar en localStorage
                try {
                    localStorage.setItem('pizzas', JSON.stringify(pizzas));
                } catch (error) {
                    console.error('Error al guardar en localStorage:', error);
                    showMessage('Error al guardar los cambios. Intente nuevamente.', 'error');
                    return;
                }
                
                // Actualizar vistas
                renderPizzaMenu();
                renderAdminList();
                
                showMessage(`Pizza "${pizzaName}" eliminada correctamente.`, 'success');
            }
        }

        // Cambiar estado disponible/agotado
        function togglePizzaStatus(id) {
            const pizzaIndex = pizzas.findIndex(p => p.id === id);
            if (pizzaIndex !== -1) {
                pizzas[pizzaIndex].available = !pizzas[pizzaIndex].available;
                
                // Guardar en localStorage
                try {
                    localStorage.setItem('pizzas', JSON.stringify(pizzas));
                } catch (error) {
                    console.error('Error al guardar en localStorage:', error);
                    showMessage('Error al guardar los cambios. Intente nuevamente.', 'error');
                    return;
                }
                
                // Actualizar vistas
                renderPizzaMenu();
                renderAdminList();
                
                const statusText = pizzas[pizzaIndex].available ? 'disponible' : 'agotada';
                showMessage(`Pizza "${pizzas[pizzaIndex].name}" marcada como ${statusText}.`, 'success');
            }
        }

        // Restablecer formulario
        function resetForm() {
            document.getElementById('pizza-form').reset();
            document.getElementById('pizza-id').value = '';
            document.getElementById('form-title').textContent = 'Agregar Nueva Pizza';
            document.getElementById('submit-btn').textContent = 'Agregar Pizza';
            document.getElementById('cancel-edit').style.display = 'none';
            
            // Seleccionar primera imagen por defecto
            document.querySelectorAll('.image-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            if (document.querySelector('.image-option')) {
                document.querySelector('.image-option').classList.add('selected');
                document.getElementById('pizza-image').value = defaultImages[0].url;
            }
        }

        // Mostrar mensajes
        function showMessage(text, type) {
            const messageDiv = document.getElementById('admin-message');
            messageDiv.textContent = text;
            messageDiv.className = `message ${type}`;
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(() => {
                messageDiv.className = 'message';
            }, 5000);
        }