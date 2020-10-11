<template>
    <div>
        <!-- Main content -->
        <section class="content pt-4">
            <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Category List</h3>
                                <div class="card-tools">
                                    <router-link to="/add-category" class="btn btn-info btn-sm">Add Category</router-link>
                                </div>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body p-0">
                            <table class="table table-sm">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>Update software</td>
                                    <td><span class="badge bg-danger">55%</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <!-- /.content -->
    </div>
</template>

<script>
    export default {
        name: "manage"
    }
</script>

<style scoped>

</style>
