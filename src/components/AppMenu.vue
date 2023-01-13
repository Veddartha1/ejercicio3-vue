<script>
export default {}
</script>

<template>
    <nav class="navbar navbar-dark bg-dark text-white row p-2 m-1">
        <p class="col-4">ALMACÉN ACME</p>
        <router-link to="/" class="nav-link offset-2 col-1">Tareas</router-link>
        <router-link to="/add-todo" class="nav-link col-1">Añadir tarea</router-link>
        <router-link to="/about" class="nav-link col-1">Sobre nosotros</router-link>
        <router-link to="/del-all-todos" class="nav-link col-1">Borrar todas</router-link>
    </nav>
</template>