/*
 * Copyright 2018-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.onosproject.odtn.utils.tapi;

import org.onosproject.yang.gen.v1.tapitopology.rev20180307.tapitopology.topology.Node;
import org.onosproject.yang.gen.v1.tapitopology.rev20180307.tapitopology.topologycontext.Topology;

public final class DcsBasedTapiNodeRef extends TapiNodeRef {

    private DcsBasedTapiNodeRef(Topology topology, Node node) {
        super(topology.uuid().toString(), node.uuid().toString());
    }

    public static DcsBasedTapiNodeRef create(Topology topology, Node node) {
        return new DcsBasedTapiNodeRef(topology, node);
    }
}