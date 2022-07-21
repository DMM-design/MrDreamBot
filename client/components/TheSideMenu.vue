<style lang="scss">
	aside{
		background-color: $darkColorBG;
        height: 100vh;
        width: 346px;
        color: white;
        
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
            <span class="iconify-inline" data-icon="icon-park-solid:avatar"></span>
            <div class="additional-information">
                <span>Followers: 0 | Subscriptions: 0</span>
                <h1>nick</h1>
            </div>
        </header>
        <main>
            <NuxtLink class="activeLink" to="/">
                <span class="iconify-inline" data-icon="ant-design:home-filled"></span>
                HOME
            </NuxtLink>
            <NuxtLink class="redirectLink" to="/timers">
                <span class="iconify-inline" data-icon="ant-design:clock-circle-filled"></span>
                TIMERS
            </NuxtLink>
            <NuxtLink class="redirectLink" to="/commands">
                <span class="iconify-inline" data-icon="clarity:command-solid"></span>
                COMMANDS
            </NuxtLink>
            <NuxtLink class="redirectLink" to="/chat">
                <span class="iconify-inline" data-icon="akar-icons:chat-bubble"></span>
                CHAT
            </NuxtLink>
            <NuxtLink class="redirectLink" to="/games">
                <span class="iconify-inline" data-icon="fluent:games-24-filled"></span>
                GAMES
            </NuxtLink>
            <NuxtLink class="redirectLink" to="/settings">
                <span class="iconify-inline" data-icon="clarity:settings-solid"></span>
                SETTINGS
            </NuxtLink>
        </main>
        <footer>
            <span>MrDreamBOT v1.0</span>
        </footer>
    </aside>
</template>
<script setup>
</script>
