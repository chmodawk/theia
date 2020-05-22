/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

import { injectable } from 'inversify';
import { CommandRegistry } from '../../common/command';

@injectable()
export class ElectronCommandRegistry extends CommandRegistry {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isVisible(command: string, ...args: any[]): boolean {
        // const isVisible: boolean = super.isVisible(command, args);
        // if (!isVisible) {
        //     return false;
        // }
        // return this.isEnabled(command, args);
        return super.isVisible(command, args);
    }
}