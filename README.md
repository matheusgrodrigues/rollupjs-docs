# rollupjs-docs

Leitura da documentação do Rollup.js para criação de libs npm

- [Introduction](#overview)

## Overview

- Rollup é um empacotador de módulos para JavaScript
- compila pequenos pedaços de código em algo maior e mais complexo, como uma biblioteca ou aplicativo.
- Ele usa o novo formato padronizado para módulos de código incluídos na revisão ES6 do JavaScript, em vez de soluções idiossincráticas anteiores, como CommonJS e AMD.

## Instalacao

> npm install --global rollup

- Isso disponibilizará o Rollup como uma ferramenta de linha de comando global.
- Você tamém pode instalá-lo localmente, consulte [Instalando o Rollup localmente](https://rollupjs.org/guide/en/#installing-rollup-locally)

## Porque utilizar

- O desenvolvimento de software geralmente é mais fácil de você dividir seu projeto em partes menores.
- Inicialmente o JavaScript não inclui historicamente este recurso como um recurso principal da linguagem.
- Isso finalmente mudou com a revisão ES6 do JavaScript. Que inclui uma sintaxe de import e export.
- Isso permite que possamos compartilhar dados entre scripts separados.
- Mas esse recurso só foi implementado em navegadores modernos.
- O rollup permite que você escreva o seu código o novo sistema de módulos e, em seguida, ele compilará de volta para formatos suportados existentes.
- Isso significa que você pode escrever código com a sintaxe moderna e o Rollup irá converter para uma sintaxe suportadas por todos os browsers.

## Interface de linha de comando

- Normalmente, o rollup deve ser usado na linha de comando.
- Você pode criar um arquivo de configuração de Rollup opcional para simplificar o uso da linha de comando e habilitar a funcionalidade de Rollup avançada.

## Arquivos de configuracao

- Os arquivos de configuração do rollup são opcionais, mas são poderosos e convenientes, e, portanto, rocomentados.
- Um arquivo de configuração é um módulo ES que exporta um objeto padrão com as opções desejadas.
- Normalmente, é chamado rollup.config.js e fica na raiz do projeto.

`export default { input: 'src/main.js', output: { file: 'bundle.js', format: 'cjs' } };`

- Você também pode utilizar outras linguagens como typescript.
- Para fazer isso, instale um plugin de Rollup correspondente como o @rollup/plugin-typescript e usar o --configPlugin
  `rollup --config rollup.config.ts --configPlugin typescript`
