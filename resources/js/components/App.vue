<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand" href="#">Lavarel Vue crud application</router-link>
                <div class="collapse navbar-collapse">
                    <router-link exact-active-class="active" to="/" class="nav-item nav-link">Home</router-link>
                    <router-link exact-active-class="active" to="/category" class="nav-item nav-link">category</router-link>
                </div>
            </div>
        </nav>
        <div class="container mt-5">
            <Router-view></Router-view>
        </div>
    </main>
</template>

<script>
export default {}
</script>