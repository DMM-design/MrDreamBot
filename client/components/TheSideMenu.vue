<style lang="scss" scoped>
	aside{
		background-color: $darkColorBG;
        color: #fff;
        height: 100vh;
        width: 400px;
        
        header{
            height: 148px;
            background-color: $lightPurple;
            display: flex;
            align-items: center;
            gap: 10px;
            
            .iconify-inline{
                    @include SetIconSize($height: 40px, $width: 40px);
                    margin-left: 30px;
            }

            .additional-information{
                line-height: 1px;
            }
        }

        main{
            height: 81vh;
            display: flex;
            flex-direction: column;

            .activeLink{
                background-color: $darkPurple;
                @include SetTextSettings($size: 20px, $weight: 400, $color: $hoverColor);
                height: 9vh;
                color: white;
                display: flex;
                gap: 30px;
                align-items: center;
                text-decoration: none;

                .iconify-inline{
                    @include SetIconSize($height: 40px, $width: 40px);
                    margin-left: 30px;
                }
            }

            .redirectLink{
                @include SetTextSettings($size: 20px, $weight: 400, $color: $hoverColor);
                text-decoration: none;
                height: 9vh;
                color: white;
                display: flex;
                gap: 30px;
                align-items: center;
                
                :link{
                    text-decoration: none;
                }

                .iconify-inline{
                    @include SetIconSize($height: 40px, $width: 40px);
                    margin-left: 30px;
                }
            }
        }

        footer{
            display: flex;
            background-color: $footerColor;
            font-family: Roboto;
            height: 53px;
            justify-content: center;
            align-items: center;
        }
	}
</style>
<template>
    <aside>
        <header>
            <Icon class="iconify-inline" icon="icon-park-solid:avatar" />
            <div class="additional-information">
                <span>Followers: 0 | Subscriptions: 0</span>
                <h1>nick</h1>
            </div>
        </header>
        <main>
            <NuxtLink v-bind:class="['redirectLink', (route.path === '/')? 'activeLink' : '']" to="/">
                <Icon class="iconify-inline" icon="ant-design:home-filled" />
                HOME
            </NuxtLink>
            <NuxtLink v-bind:class="['redirectLink', (route.path === '/timers')? 'activeLink' : '']" to="/timers">
                <Icon class="iconify-inline" icon="ant-design:clock-circle-filled" />
                TIMERS
            </NuxtLink>
            <NuxtLink v-bind:class="['redirectLink', (route.path === '/commands')? 'activeLink' : '']" to="/commands">
                <Icon class="iconify-inline" icon="clarity:command-solid" />
                COMMANDS
            </NuxtLink>
            <NuxtLink v-bind:class="['redirectLink', (route.path === '/chat')? 'activeLink' : '']" to="/chat">
                <Icon class="iconify-inline" icon="akar-icons:chat-bubble" />
                CHAT
            </NuxtLink>
            <NuxtLink v-bind:class="['redirectLink', (route.path === '/games')? 'activeLink' : '']" to="/games">
                <Icon class="iconify-inline" icon="fluent:games-24-filled" />
                GAMES
            </NuxtLink>
            <NuxtLink v-bind:class="['redirectLink', (route.path === '/settings')? 'activeLink' : '']" to="/settings">
                <Icon class="iconify-inline" icon="clarity:settings-solid" />
                SETTINGS
            </NuxtLink>
        </main>
        <footer>
            <span>MrDreamBOT v1.0</span>
        </footer>
    </aside>
</template>
<script setup>
    import { Icon } from '@iconify/vue';
    const route = useRoute();
</script>
