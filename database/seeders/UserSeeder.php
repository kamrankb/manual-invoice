<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'first_name' => 'Admin',
            'last_name' => 'One',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('12345678'),
            
        ]);

        $adminRole = Role::create(['name' => 'Admin']);

        //Assigning roles to users
        $admin->assignRole([$adminRole->id]);
        
        //Permissions Module Wise
        $Userpermission1 = Permission::create(['name'=>'User-Create','guard_name'=>'web']);
        $Userpermission2 = Permission::create([ 'name'=>'User-Edit','guard_name'=>'web', ]);
        $Userpermission3 = Permission::create([ 'name'=>'User-View', 'guard_name'=>'web', ]);
        $Userpermission4 = Permission::create([ 'name'=>'User-Delete', 'guard_name'=>'web', ]);

        //Customer Permissions
        $Invoice1 = Permission::create(['name' => 'Invoice-Create','guard_name' => 'web']);
        $Invoice2 = Permission::create(['name' => 'Invoice-Edit','guard_name' => 'web']);
        $Invoice3 = Permission::create(['name' => 'Invoice-View','guard_name' => 'web']);
        $Invoice4 = Permission::create(['name' => 'Invoice-Delete','guard_name' => 'web']);


        //Assign Permissions to Roles

        //Add Permissions to adminRole
        $adminRole->givePermissionTo([$Userpermission1, $Userpermission2, $Userpermission3, $Userpermission4]);
        $adminRole->givePermissionTo([$Invoice1, $Invoice2, $Invoice3, $Invoice4]);
        
    }
}
