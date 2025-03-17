export const xml_1 =`<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                         xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL"
                         xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                         xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                         xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram"
                         targetNamespace="http://bpmn.io/schema/bpmn"
                         xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
                         <bpmn2:process id="Process_1" isExecutable="false">
        <bpmn2:task id="Activity_1mfjbld" name="Statstican: Add APIs">
            <bpmn2:incoming>Flow_11cuxku</bpmn2:incoming>
            <bpmn2:outgoing>Flow_05d29xi</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:task id="Activity_0bydpx4" name="Reviewer 1">
            <bpmn2:incoming>Flow_05d29xi</bpmn2:incoming>
            <bpmn2:outgoing>Flow_0qq5jvv</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_05d29xi" sourceRef="Activity_1mfjbld"
            targetRef="Activity_0bydpx4" />
        <bpmn2:exclusiveGateway id="Gateway_0ajuul5" name="Data Review">
            <bpmn2:incoming>Flow_0qq5jvv</bpmn2:incoming>
            <bpmn2:incoming>Flow_1d356ja</bpmn2:incoming>
            <bpmn2:outgoing>Flow_028b40h</bpmn2:outgoing>
            <bpmn2:outgoing>Flow_0tqmvx2</bpmn2:outgoing>
        </bpmn2:exclusiveGateway>
        <bpmn2:sequenceFlow id="Flow_0qq5jvv" sourceRef="Activity_0bydpx4"
            targetRef="Gateway_0ajuul5" />
        <bpmn2:task id="Activity_1rfk6mf" name="Reviewer 1 Reject APIs">
            <bpmn2:incoming>Flow_028b40h</bpmn2:incoming>
            <bpmn2:outgoing>Flow_11cuxku</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_028b40h" name="Reject " sourceRef="Gateway_0ajuul5"
            targetRef="Activity_1rfk6mf" />
        <bpmn2:sequenceFlow id="Flow_11cuxku" name="Request Modification "
            sourceRef="Activity_1rfk6mf" targetRef="Activity_1mfjbld" />
        <bpmn2:task id="Activity_0dtjb77" name="Reviewer 1 Accept APIs">
            <bpmn2:incoming>Flow_0tqmvx2</bpmn2:incoming>
            <bpmn2:outgoing>Flow_1etw9bg</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_0tqmvx2" name="Accept" sourceRef="Gateway_0ajuul5"
            targetRef="Activity_0dtjb77" />
        <bpmn2:task id="Activity_0oplnnn" name="Subject Manager">
            <bpmn2:incoming>Flow_1etw9bg</bpmn2:incoming>
            <bpmn2:outgoing>Flow_19vh8qn</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_1etw9bg" sourceRef="Activity_0dtjb77"
            targetRef="Activity_0oplnnn" />
        <bpmn2:exclusiveGateway id="Gateway_0s4aj0n" name="Data Review">
            <bpmn2:incoming>Flow_19vh8qn</bpmn2:incoming>
            <bpmn2:outgoing>Flow_1y85vqu</bpmn2:outgoing>
            <bpmn2:outgoing>Flow_1vlexbe</bpmn2:outgoing>
        </bpmn2:exclusiveGateway>
        <bpmn2:sequenceFlow id="Flow_19vh8qn" sourceRef="Activity_0oplnnn"
            targetRef="Gateway_0s4aj0n" />
        <bpmn2:task id="Activity_0gju5mr" name="Subject Manger: Reject APIs">
            <bpmn2:incoming>Flow_1y85vqu</bpmn2:incoming>
            <bpmn2:outgoing>Flow_1d356ja</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_1d356ja" name="Request Modification "
            sourceRef="Activity_0gju5mr" targetRef="Gateway_0ajuul5" />
        <bpmn2:sequenceFlow id="Flow_1y85vqu" name="Reject" sourceRef="Gateway_0s4aj0n"
            targetRef="Activity_0gju5mr" />
        <bpmn2:task id="Activity_0fjezc7" name="Subject Manger: Accept APIs">
            <bpmn2:incoming>Flow_1vlexbe</bpmn2:incoming>
            <bpmn2:outgoing>Flow_1i474mc</bpmn2:outgoing>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_1vlexbe" name="Accept" sourceRef="Gateway_0s4aj0n"
            targetRef="Activity_0fjezc7" />
        <bpmn2:task id="Activity_1qf6csz" name="Subject Manger: Publish APIs">
            <bpmn2:incoming>Flow_1i474mc</bpmn2:incoming>
        </bpmn2:task>
        <bpmn2:sequenceFlow id="Flow_1i474mc" sourceRef="Activity_0fjezc7"
            targetRef="Activity_1qf6csz" />
                         </bpmn2:process>
                         <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
            <bpmndi:BPMNShape id="Activity_1mfjbld_di" bpmnElement="Activity_1mfjbld">
                <dc:Bounds x="410" y="20" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0bydpx4_di" bpmnElement="Activity_0bydpx4">
                <dc:Bounds x="410" y="190" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Gateway_0ajuul5_di" bpmnElement="Gateway_0ajuul5"
                isMarkerVisible="true">
                <dc:Bounds x="435" y="355" width="50" height="50" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="468" y="353" width="64" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_1rfk6mf_di" bpmnElement="Activity_1rfk6mf">
                <dc:Bounds x="170" y="420" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0dtjb77_di" bpmnElement="Activity_0dtjb77">
                <dc:Bounds x="720" y="340" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0oplnnn_di" bpmnElement="Activity_0oplnnn">
                <dc:Bounds x="720" y="470" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Gateway_0s4aj0n_di" bpmnElement="Gateway_0s4aj0n"
                isMarkerVisible="true">
                <dc:Bounds x="745" y="615" width="50" height="50" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="738" y="675" width="64" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0fjezc7_di" bpmnElement="Activity_0fjezc7">
                <dc:Bounds x="1010" y="600" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0gju5mr_di" bpmnElement="Activity_0gju5mr">
                <dc:Bounds x="410" y="810" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_1qf6csz_di" bpmnElement="Activity_1qf6csz">
                <dc:Bounds x="1010" y="800" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge id="Flow_05d29xi_di" bpmnElement="Flow_05d29xi">
                <di:waypoint x="460" y="100" />
                <di:waypoint x="460" y="190" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0qq5jvv_di" bpmnElement="Flow_0qq5jvv">
                <di:waypoint x="460" y="270" />
                <di:waypoint x="460" y="355" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_028b40h_di" bpmnElement="Flow_028b40h">
                <di:waypoint x="435" y="380" />
                <di:waypoint x="220" y="380" />
                <di:waypoint x="220" y="420" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="311" y="362" width="33" height="27" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_11cuxku_di" bpmnElement="Flow_11cuxku">
                <di:waypoint x="170" y="460" />
                <di:waypoint x="110" y="460" />
                <di:waypoint x="110" y="60" />
                <di:waypoint x="410" y="60" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="120" y="250" width="59" height="40" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_0tqmvx2_di" bpmnElement="Flow_0tqmvx2">
                <di:waypoint x="485" y="380" />
                <di:waypoint x="720" y="380" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="587" y="362" width="34" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1etw9bg_di" bpmnElement="Flow_1etw9bg">
                <di:waypoint x="770" y="420" />
                <di:waypoint x="770" y="470" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_19vh8qn_di" bpmnElement="Flow_19vh8qn">
                <di:waypoint x="770" y="550" />
                <di:waypoint x="770" y="615" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1d356ja_di" bpmnElement="Flow_1d356ja">
                <di:waypoint x="460" y="810" />
                <di:waypoint x="460" y="405" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="470" y="645" width="59" height="40" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1y85vqu_di" bpmnElement="Flow_1y85vqu">
                <di:waypoint x="745" y="640" />
                <di:waypoint x="580" y="640" />
                <di:waypoint x="580" y="850" />
                <di:waypoint x="510" y="850" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="587" y="744" width="33" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1vlexbe_di" bpmnElement="Flow_1vlexbe">
                <di:waypoint x="795" y="640" />
                <di:waypoint x="1010" y="640" />
                <bpmndi:BPMNLabel>
                    <dc:Bounds x="886" y="622" width="34" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1i474mc_di" bpmnElement="Flow_1i474mc">
                <di:waypoint x="1060" y="680" />
                <di:waypoint x="1060" y="800" />
            </bpmndi:BPMNEdge>
        </bpmndi:BPMNPlane>
                         </bpmndi:BPMNDiagram>
                     </bpmn2:definitions>
                    `