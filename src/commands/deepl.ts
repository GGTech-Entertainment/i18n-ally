import { commands, window } from 'vscode'

import { abbreviateNumber } from '../utils'
import { Commands, Config } from '../core'
import { ExtensionModule } from '../modules'
import i18n from '../i18n'
import { usage } from '../translators/engines/deepl'

const m: ExtensionModule = (ctx) => {
  async function deepAuth() {
    const apiKey = Config.deeplApiKey

    if (!apiKey) {
      return window.showErrorMessage(
        i18n.t('prompt.deepl_api_key_required'),
      )
    }

    try {
      const deeplUsage = await usage()

      window.showInformationMessage(
        i18n.t(
          'prompt.deepl_usage',
          abbreviateNumber(deeplUsage.character_count),
          abbreviateNumber(deeplUsage.character_limit),
        ),
        i18n.t('prompt.button_discard'),
      )
    }
    catch (err) {
      window.showErrorMessage(i18n.t('prompt.deepl_error_get_usage'))
    }
  }

  return [
    commands.registerCommand(Commands.deepl_usage, deepAuth),
  ]
}

export default m
