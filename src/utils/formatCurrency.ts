export const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })


    // Caso queira rodar a formatação a baixo usando (Intl.NumberFormat). 
    // Fazer alterações no android.

    // return new Intl.NumberFormat('pt-BR', {
    //     style: 'currency',
    //     currency: 'BRL',
    //     minimumFractionDigits: 2,
    // }).format(value);

    // Alteração no android.
    //     No seu arquivo: 
    //          app/build.gradle, 
    //          alterar de org.webkit:android-jsc:+ para:
    //          def jscFlavor = 'org.webkit:android-jsc-intl:+'

    // E verifica, neste mesmo arquivo, se está implementado em suas dependências, como mostro abaixo:
    // dependencies {
    //     ...
    //     if (enableHermes) {
    //         ...
    //     } else {
    //         implementation jscFlavor
    //     }
    // }

}