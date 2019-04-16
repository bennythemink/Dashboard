<template>
<div class="panel" id="offsite_staff">
    <header >
        <div class="heading">
            <h3 class="bold">Offsite Staff</h3>
        </div>
    </header>
    <section>
        <div class="client_group" v-for="client in this.$store.getters.clients" :key="client.id">
            <div class="logo"><img src="../assets/svg/medibank-logo.svg"/></div>
            <div class="staff_member" v-for="contractor in client.contractors" :key="contractor.id">
                <div class="avatar">
                    <!-- <img :src="contractor.photoUrl"/> -->
                </div>
                <div class="name_position">
                    <div class="name bold">{{ contractor.name }}</div>
                    <div class="position">{{ contractor.position }}</div>
                </div>
            </div>
        </div>
        <!-- <div class="client_group">
            <div class="logo"><img src="../assets/svg/medibank-logo.svg"/></div>
            <div class="staff_member">
                <div class="avatar"></div>
                <div class="name_position">
                    <div class="name bold">James Rhodes</div>
                    <div class="position">Project Owner</div>
                </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Ed Mejia</div>
                        <div class="position">iOS Developer</div>
                    </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Zeki Guler</div>
                        <div class="position">Android Developer</div>
                    </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Josh Sumitro</div>
                        <div class="position">Android Developer</div>
                    </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Thanshon Tran</div>
                        <div class="position">Java Developer</div>
                    </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Mark Newton</div>
                        <div class="position">iOS Developer</div>
                    </div>
            </div>
        </div>
        <div class="client_group">
            <div class="logo"><img src="../assets/svg/carsales-logo.svg"/></div>
            <div class="staff_member">
                <div class="avatar"></div>
                <div class="name_position">
                    <div class="name bold">Amit Kumar</div>
                    <div class="position">.NET Developer</div>
                </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Martin Speedie</div>
                        <div class="position">ReactJS Developer</div>
                    </div>
            </div>
        </div>
        <div class="client_group">
            <div class="logo"><img src="../assets/svg/nab-logo.svg"/></div>
            <div class="staff_member">
                <div class="avatar"></div>
                <div class="name_position">
                    <div class="name bold">Yawen Wu</div>
                    <div class="position">UX Designer</div>
                </div>
            </div>
        </div>
        <div class="client_group">
            <div class="logo"><img src="../assets/svg/ANZ-Logo.svg"/></div>
            <div class="staff_member">
                <div class="avatar"></div>
                <div class="name_position">
                    <div class="name bold">Jonathan Head</div>
                    <div class="position">iOS Developer</div>
                </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Bazyl Reinstein</div>
                        <div class="position">iOS Developer</div>
                    </div>
            </div>
        </div>
        <div class="client_group">
            <div class="logo"><img src="../assets/svg/EY-logo.svg"/></div>
            <div class="staff_member">
                <div class="avatar"></div>
                <div class="name_position">
                    <div class="name bold">Alastair McCann</div>
                    <div class="position">Developer</div>
                </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Alvin Santoso</div>
                        <div class="position">Developer</div>
                    </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Deana Ferraro</div>
                        <div class="position">Marketing</div>
                    </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Eliza Sorenson</div>
                        <div class="position">Dev Ops</div>
                    </div>
            </div>
            <div class="staff_member">
                    <div class="avatar"></div>
                    <div class="name_position">
                        <div class="name bold">Jason Chieng</div>
                        <div class="position">UI/UX Designer</div>
                    </div>
            </div>
        </div> -->
    </section>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.client_group{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
}
.client_group:not(:first-of-type){
    padding-top: 15px;
}
.client_group:not(:first-of-type){
    border-top:1px dotted #ddd;
}
.client_group:not(:last-of-type){
    margin-bottom: 15px;
}
.client_group .logo{
    flex:0 0 100%;
    margin-bottom: 10px;
}
.client_group .logo img{
    height: 15px;
}
.client_group .staff_member{
    flex: 0 0 50%;
    display: flex;
    height: 40px;
}
.client_group .staff_member:nth-of-type(n+3) {
    margin-top: 10px;  
}
.client_group .staff_member:nth-of-type(even){
    padding-left: 10px;
}
.staff_member .avatar{
    flex: 0 0 40px;
    height: 40px;
    background-color: #f2f2f2; 
    border-radius: 50%;
    overflow: hidden;
    background-position: center center;
    background-image: url(../assets/svg/default-user.svg);
    background-repeat: no-repeat;
}
.staff_member .avatar img{
    width: 40px;
}
.staff_member .name_position{
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
}
.staff_member .name_position>div{
    flex: 0 0 100%;
}
</style>