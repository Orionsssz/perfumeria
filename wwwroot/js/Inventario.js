// Selección de elementos del DOM
const modal = new bootstrap.Modal(document.getElementById('productoModal'));
const deleteModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
const productoForm = document.getElementById('productoForm');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const clearFiltersBtn = document.getElementById('clearFilters');

// Variables globales
let currentProductId = 0;
let table;

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function () {
    initDataTable();
    initEventListeners();
});

// Inicializar DataTable
function initDataTable() {
    table = $('#inventarioTable').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/es-ES.json'
        },
        columnDefs: [
            { orderable: false, targets: [9] }, // Columna de acciones no ordenable
            { searchable: false, targets: [9] } // Columna de acciones no buscable
        ]
    });
}

// Función para inicializar los event listeners
function initEventListeners() {
    // Botón para abrir modal de nuevo producto
    document.getElementById('addProduct').addEventListener('click', openModal);

    // Formulario
    productoForm.addEventListener('submit', handleFormSubmit);

    // Filtros
    searchInput.addEventListener('input', () => table.search(searchInput.value).draw());
    filterSelect.addEventListener('change', applyColumnFilter);
    clearFiltersBtn.addEventListener('click', clearFilters);

    // Botones de edición/eliminación (delegación de eventos)
    document.addEventListener('click', function (e) {
        if (e.target.closest('.edit-btn')) {
            editProduct(e.target.closest('.edit-btn').dataset.id);
        }
        if (e.target.closest('.delete-btn')) {
            confirmDelete(e.target.closest('.delete-btn').dataset.id);
        }
    });

    // Botón de confirmación para eliminar
    document.getElementById('confirmDelete').addEventListener('click', deleteProduct);
}

// Funciones del modal
function openModal() {
    resetForm();
    document.getElementById('modalTitle').textContent = 'Nuevo Producto';
    modal.show();
}

function closeModal() {
    modal.hide();
}

// Funciones del formulario
function resetForm() {
    productoForm.reset();
    currentProductId = 0;
    document.getElementById('productoId').value = '0';
    document.getElementById('imagenProducto').value = '';
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(productoForm);
    const productoId = formData.get('ID_Producto');

    try {
        const response = await fetch(`?handler=${productoId === '0' ? 'Create' : 'Edit'}&id=${productoId}`, {
            method: 'POST',
            headers: {
                'RequestVerificationToken': document.querySelector('input[name="__RequestVerificationToken"]').value
            },
            body: formData
        });

        if (response.ok) {
            location.reload();
        } else {
            const error = await response.json();
            alert('Error: ' + (error.message || 'Error al guardar el producto'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión con el servidor');
    }
}

// Funciones para editar/eliminar
async function editProduct(id) {
    try {
        const response = await fetch(`?handler=GetProduct&id=${id}`);
        if (!response.ok) throw new Error('Error al cargar producto');

        const producto = await response.json();

        // Rellenar formulario con los datos del producto
        document.getElementById('productoId').value = producto.id_Producto;
        document.getElementById('nombreProducto').value = producto.nombre_Producto;
        document.getElementById('descripcion').value = producto.descripcion;
        document.getElementById('precio').value = producto.precio;
        document.getElementById('stock').value = producto.stock;
        document.getElementById('marca').value = producto.id_Marca;
        document.getElementById('clasificacion').value = producto.id_Clasificacion;
        document.getElementById('aroma').value = producto.id_Aroma;
        document.getElementById('envase').value = producto.id_Envase;
        document.getElementById('tamano').value = producto.id_Tamaño;

        document.getElementById('modalTitle').textContent = 'Editar Producto';
        modal.show();
        currentProductId = id;
    } catch (error) {
        console.error('Error:', error);
        alert('Error al cargar el producto para editar');
    }
}

function confirmDelete(id) {
    currentProductId = id;
    deleteModal.show();
}

async function deleteProduct() {
    try {
        const response = await fetch(`?handler=Delete&id=${currentProductId}`, {
            method: 'POST',
            headers: {
                'RequestVerificationToken': document.querySelector('input[name="__RequestVerificationToken"]').value
            }
        });

        if (response.ok) {
            deleteModal.hide();
            location.reload();
        } else {
            const error = await response.json();
            alert('Error: ' + (error.message || 'Error al eliminar el producto'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión con el servidor');
    }
}

// Funciones de filtrado
function applyColumnFilter() {
    const columnIndex = filterSelect.value;
    if (columnIndex) {
        table.column(columnIndex).search(searchInput.value).draw();
    } else {
        table.search(searchInput.value).draw();
    }
}

function clearFilters() {
    searchInput.value = '';
    filterSelect.value = '';
    table.search('').columns().search('').draw();
}